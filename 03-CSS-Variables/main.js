const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // ! this.dataset give all the data-* in that html tag.
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));