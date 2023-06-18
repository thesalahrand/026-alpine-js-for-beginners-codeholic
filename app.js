document.addEventListener('alpine:init', () => {
  Alpine.data('dropdown', () => ({
    open: false,
    toggle() {
      this.open = !this.open;
    }
  }));

  Alpine.store('currentUser', {
    username: 'thesalahrand',
    posts: ['Post 01', 'Post 02']
  });
});