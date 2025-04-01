export const handleImageChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setImage: (imageUrl: string | null) => void
) => {
  const file = event.target.files?.[0]; // Obtenemos el primer archivo

  if (!file) {
    setImage(null); // Si no hay archivo, limpiamos la imagen
    return;
  }

  const reader = new FileReader();
  reader.onloadend = () => {
    setImage(reader.result as string); // Guardamos la URL base64 en el contexto
  };
  reader.readAsDataURL(file); // Convertimos la imagen a base64
};