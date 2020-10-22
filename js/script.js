const toggleButton = document.getElementById('toggler'),
    annuallyPay = document.querySelectorAll('.annually'),
    monthlyPay = document.querySelectorAll('.monthly');

toggleButton.addEventListener('click', (e) => {
    //    if (body.classList.contains('dark')) {
    //        body.classList.remove('dark');
    //        body.classList.add('light');
    //        themeMode.textContent = "Light Mode";
    //
    //    } else {
    //        body.classList.replace('light', 'dark');
    //        themeMode.textContent = "Dark Mode";
    //    }
    annuallyPay.forEach(pay => {
        if (pay.classList.contains('active')) {
            pay.classList.remove('active');
            pay.classList.add('hidden');


        } else {
            pay.classList.replace('hidden', 'active');

        }
    });
    monthlyPay.forEach(pay => {
        if (pay.classList.contains('hidden')) {
            pay.classList.remove('hidden');
            pay.classList.add('active');


        } else {
            pay.classList.replace('active', 'hidden');

        }
    });
})
