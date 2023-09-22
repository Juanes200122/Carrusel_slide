const slides = document.querySelectorAll(".slide");
        let currentSlide = 0;

        function showSlide(index) {
            if (index < 0) {
                currentSlide = slides.length - 1;
            } else if (index >= slides.length) {
                currentSlide = 0;
            }

            slides.forEach((slide, i) => {
                if (i === currentSlide) {
                    slide.style.display = "block";
                } else {
                    slide.style.display = "none";
                }
            });
        }

        function nextSlide() {
            currentSlide++;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide--;
            showSlide(currentSlide);
        }

        // Mostrar el primer slide al cargar la página
        showSlide(currentSlide);

        // Controladores de botones
        document.getElementById("prevBtn").addEventListener("click", prevSlide);
        document.getElementById("nextBtn").addEventListener("click", nextSlide);
