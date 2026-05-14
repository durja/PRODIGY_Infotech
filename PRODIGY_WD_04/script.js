// Toast alert on clicking project GitHub links
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 2000);
}

document.querySelectorAll('.project a').forEach(link => {
  link.addEventListener('click', () => {
    showToast('Opening project GitHub repository!');
  });
});
