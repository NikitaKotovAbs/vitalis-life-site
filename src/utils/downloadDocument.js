export const downloadDocument = (fileName, displayName) => {
    console.log('Попытка скачать файл:', fileName, 'как:', displayName);

    // Создаем временную ссылку для скачивания
    const link = document.createElement('a');
    link.href = `/documents/${fileName}`;
    link.download = displayName;
    console.log('Ссылка для скачивания:', link.href);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('Скачивание завершено');
};