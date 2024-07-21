function openYandexMail() {
    const name = document.querySelector('input[name="your-name"]').value;
    const email = document.querySelector('input[name="your-email"]').value;
    const message = document.querySelector('textarea[name="your-message"]').value;

    const subject = `Сообщение от ${name}`;
    const body = `Имя: ${name}\nE-mail: ${email}\nСообщение: ${message}`;

    const mailtoLink = `mailto:bmwforce@bk.ru?to=&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}