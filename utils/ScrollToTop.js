export default function ScrollToTop() {
  if (process.client) {
    window.scrollTo(0, 0);
  }
}