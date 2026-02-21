import { useRef } from "react";
import { Camera, ImagePlus, X } from "lucide-react";

interface ImagePickerProps {
  images: string[];
  onImagesChange: (imgs: string[]) => void;
  max?: number;
}

const ImagePicker = ({ images, onImagesChange, max = 3 }: ImagePickerProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const remaining = max - images.length;
    const toProcess = Array.from(files).slice(0, remaining);

    toProcess.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        // Resize to save localStorage space
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxSize = 800;
          let w = img.width;
          let h = img.height;
          if (w > maxSize || h > maxSize) {
            if (w > h) { h = (h / w) * maxSize; w = maxSize; }
            else { w = (w / h) * maxSize; h = maxSize; }
          }
          canvas.width = w;
          canvas.height = h;
          canvas.getContext("2d")!.drawImage(img, 0, 0, w, h);
          const compressed = canvas.toDataURL("image/jpeg", 0.7);
          onImagesChange([...images, compressed]);
        };
        img.src = result;
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (idx: number) => {
    onImagesChange(images.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-2">
      <label className="text-foreground text-xs font-body font-semibold block">
        📸 Imágenes del suelo ({images.length}/{max})
      </label>

      {/* Preview grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-border">
              <img src={src} alt={`Suelo ${i + 1}`} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => removeImage(i)}
                className="absolute top-1 right-1 w-6 h-6 bg-black/60 rounded-full flex items-center justify-center"
              >
                <X className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          ))}
        </div>
      )}

      {images.length < max && (
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => cameraRef.current?.click()}
            className="flex-1 bg-card border border-border rounded-xl px-3 py-2.5 flex items-center justify-center gap-2 text-sm font-body text-muted-foreground active:scale-98 transition-transform"
          >
            <Camera className="w-4 h-4" />
            Cámara
          </button>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="flex-1 bg-card border border-border rounded-xl px-3 py-2.5 flex items-center justify-center gap-2 text-sm font-body text-muted-foreground active:scale-98 transition-transform"
          >
            <ImagePlus className="w-4 h-4" />
            Galería
          </button>
        </div>
      )}

      <input
        ref={cameraRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
};

export default ImagePicker;
