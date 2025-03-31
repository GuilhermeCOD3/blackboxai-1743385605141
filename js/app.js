// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const navLinks = document.querySelector('.hidden.md\\:flex');
            if (navLinks) {
                navLinks.classList.toggle('hidden');
            }
        });
    }

    // Form validation for contact page
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (!name.value || !email.value || !message.value) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            if (!email.value.includes('@') || !email.value.includes('.')) {
                alert('Por favor, insira um email válido.');
                return;
            }
            
            // If validation passes
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }

    // Account form validation
    const accountForm = document.querySelector('#account-form');
    if (accountForm) {
        accountForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Informações atualizadas com sucesso!');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Basic functionality for diet plan selection
function selectPlan(plan) {
    alert(`Você selecionou o Plano ${plan}. Redirecionando para a página de pagamento...`);
    // In a real implementation, this would redirect to a payment page
}

// Basic functionality for schedule page
function addMeal() {
    const mealTime = prompt('Qual horário da refeição? (Ex: Café da Manhã, Almoço)');
    const mealDescription = prompt('O que você vai comer?');
    
    if (mealTime && mealDescription) {
        alert(`Refeição adicionada: ${mealTime} - ${mealDescription}`);
        // In a real implementation, this would add to the schedule
    }
}