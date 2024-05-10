document.querySelectorAll('.project-box').forEach(box => {
    box.addEventListener('click', () => {
        const projectName = box.id;
        const filename = `${projectName}.zip`;
        const fileUrl = `/files/${filename}`;
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = filename;
        link.click();
    });
});