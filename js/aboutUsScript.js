// Bar Chart: Medals over the years
        const ctxBar = document.getElementById('achievementBarChart').getContext('2d');
        const achievementBarChart = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: ['2020', '2021', '2022', '2023'],  // Years of achievement
                datasets: [{
                    label: 'Медалі на міжнародних змаганнях',
                    data: [15, 20, 25, 30],  // Medals won each year
                    backgroundColor: '#4caf50',  // Green color
                    borderColor: '#388e3c',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Doughnut Chart: Distribution of Medals by Type
        const ctxDoughnut = document.getElementById('achievementCircle').getContext('2d');
        const achievementCircleChart = new Chart(ctxDoughnut, {
            type: 'doughnut',
            data: {
                labels: ['Золото', 'Срібло', 'Бронза'],  // Gold, Silver, Bronze
                datasets: [{
                    data: [10, 15, 5],  // Number of medals
                    backgroundColor: ['#FFD700', '#C0C0C0', '#CD7F32'],  // Gold, Silver, Bronze colors
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                }
            }
        });

        // Radar Chart: Athlete Performance in Various Sports
        const ctxRadar = document.getElementById('achievementRadar').getContext('2d');
        const achievementRadarChart = new Chart(ctxRadar, {
            type: 'radar',
            data: {
                labels: ['Футбол', 'Баскетбол', 'Легка атлетика', 'Плавання', 'Гімнастика'],  // Sports categories
                datasets: [{
                    label: 'Продуктивність спортсменів',
                    data: [85, 70, 90, 80, 75],  // Performance ratings for each sport
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Light green
                    borderColor: '#4caf50',  // Green
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        min: 0,
                        max: 100,
                        grid: {
                            display: true // Disable the grid lines
                        },
                        ticks: {
                            display: false // Hide the ticks (scores) on the radar chart
                        }
                    }
                }
            }
        });
        // Function to open the modal and display the clicked image
            function openModal(img) {
                var modal = document.getElementById("photoModal");
                var modalImg = document.getElementById("modalImage");

                // Set the src of the modal image to the clicked image's src
                modal.style.display = "flex";
                modalImg.src = img.src;
            }

            // Function to close the modal when clicking the close button
            function closeModal() {
                var modal = document.getElementById("photoModal");
                modal.style.display = "none";
            }
            // Close modal when clicking anywhere outside the image
                window.onclick = function (event) {
                    var modal = document.getElementById("photoModal");
                    if (event.target == modal) {
                        closeModal();
                    }
                }
                let currentImageIndex = 0;
                    const galleryImages = [
                        "../img/competition/1.jpg",
                        "../img/competition/2.jpg",
                        "../img/competition/3.jpg",
                        "../img/competition/4.webp",
                        "../img/competition/5.jpg",
                        "../img/competition/6.jpeg",
                    ];

                    // Function to open the modal and display the clicked image
                    function openModal(img) {
                        currentImageIndex = galleryImages.indexOf(img.src); // Set the current image index
                        const modal = document.getElementById("photoModal");
                        const modalImg = document.getElementById("modalImage");

                        // Set the src of the modal image to the clicked image's src
                        modal.style.display = "flex";
                        modalImg.src = img.src;
                    }

                    // Function to close the modal when clicking the close button
                    function closeModal() {
                        const modal = document.getElementById("photoModal");
                        modal.style.display = "none";
                    }

                    // Function to change the image (carousel functionality)
                    function changeImage(direction) {
                        currentImageIndex += direction;

                        // Ensure the index is within bounds (looping back to the first/last image)
                        if (currentImageIndex < 0) {
                            currentImageIndex = galleryImages.length - 1;  // Go to last image if going back from the first
                        } else if (currentImageIndex >= galleryImages.length) {
                            currentImageIndex = 0;  // Go to first image if going forward from the last
                        }

                        // Update the modal image with the new image
                        const modalImg = document.getElementById("modalImage");
                        modalImg.src = galleryImages[currentImageIndex];
                    }

    // Counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        const options = {
            root: null, // Use viewport
            threshold: 0.5, // Counter starts animating when 50% visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    const step = target / 100; // Number of steps (adjust for speed)

                    let count = 0;
                    const updateCounter = () => {
                        if (count < target) {
                            count += step;
                            counter.textContent = Math.ceil(count);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target; // Ensure final number matches target
                        }
                    };

                    updateCounter();
                    observer.unobserve(counter); // Stop observing once animated
                }
            });
        }, options);

        counters.forEach((counter) => observer.observe(counter));
    }

    document.addEventListener('DOMContentLoaded', animateCounters);
    document.addEventListener('DOMContentLoaded', function () {
        const ambitionsArray = [
            "Громадські спортивні програми для дітей та молоді",
            "Ініціативи для розвитку національних спортивних федерацій",
            "Підтримка спортсменів у підготовці до міжнародних змагань",
            "Організація тренувальних таборів для професійних команд",
            "Програми реабілітації та фізичної підготовки для ветеранів",
            "Стипендії для талановитих спортсменів",
            "Розробка інфраструктурних проєктів для розвитку спортивних комплексів",
            "Проведення освітніх семінарів і тренінгів для тренерів та інструкторів",
            "Популяризація здорового способу життя через загальнонаціональні ініціативи",
            "Співпраця з міжнародними спортивними організаціями"
        ];

        const ambitionsList = document.getElementById('ambitions-list');

        // Iterate over the array and create list items
        ambitionsArray.forEach(function (ambition) {
            const listItem = document.createElement('li');
            listItem.textContent = ambition;
            ambitionsList.appendChild(listItem);
        });
    });
