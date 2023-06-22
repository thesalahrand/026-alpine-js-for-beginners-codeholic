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

  document.querySelector('.run-morph').addEventListener('click', () => {
    const el = document.querySelector('.morph-wrapper');

    Alpine.morph(el, `
      <div class="morph-wrapper" x-data="{ message: 'Change me, then press the button!' }">
        <h2>See how elements have been added</h2>  

        <input type="text" x-model="message" class="border">
        <span x-text="message"></span>

        <h2>but the state of this component hasn't changed? Magical</h2>
      </div>
    `);
  });
});