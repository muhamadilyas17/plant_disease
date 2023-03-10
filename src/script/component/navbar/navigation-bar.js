class NavigationBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">Plant Disease</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#klasifikasikan">Klasifikasikan</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tim-pengembang">Pengembang</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#credits">Credits</a>
                    </li>
                </ul>
            </div>
        </div>
        `;
    }

}

customElements.define('navigation-bar', NavigationBar);