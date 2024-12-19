document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("imageToEnlarge");
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");
  
    // Open modal on image click
    image.addEventListener("click", () => {
      modalImage.src = image.src;
      modal.classList.remove("hidden");
    });
  
    // Close modal on button click
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  
    // Close modal on backdrop click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });
  