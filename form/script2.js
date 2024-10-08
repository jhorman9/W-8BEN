document.addEventListener("DOMContentLoaded", () => {
    const fisicalEntity = document.querySelector("#fisicalorentity");
    const country = document.querySelector("#country");
    const checkEntity = document.querySelectorAll(".check-entity input");
    const checkEntityContainer = document.querySelector(".check-entity");
    const countryEntity = document.querySelector(".country-entity");
    const typeEntity = document.querySelector('#typeentity');
    const selects = document.querySelectorAll('select');
    const indicators = document.querySelectorAll('.response-indicator');
    const continueButtons = document.querySelectorAll('.tax-button-primary');
    const isShow = document.querySelector('#tax-isShow');

    let lastChecked = null;

    // Muestra/oculta secciones en función de la selección de "fisicalEntity"
    fisicalEntity.addEventListener("change", (e) => {
        const fisicalEntityValue = e.target.value;

        if (fisicalEntityValue === 'fisical') {
            localStorage.setItem("formulario", "W-8BEN");
            clearCheckEntities();
        } else {
            localStorage.removeItem("formulario");
        }

        toggleDisplay(checkEntityContainer, fisicalEntityValue === 'entity');
        toggleDisplay(countryEntity, false);
    });

    // Manejador para los checkboxes de "checkEntity"
    checkEntity.forEach(check => {
        check.addEventListener("change", (e) => {
            if (e.target.checked) {
                uncheckOthers(check);
                lastChecked = e.target;
            } else {
                e.target.checked = true;
            }

            if (['financial-institution', 'patrimonial-entity'].includes(lastChecked.id)) {
                displayInfoModal();
            }

            toggleDisplay(countryEntity, lastChecked.id === 'none-above');
        });
    });

    // Manejador de cambio en el select de "country"
    country.addEventListener("change", (e) => {
        const countryValue = e.target.value;
        const countryEntityList = getCountryEntities()[countryValue];
        updateTypeEntityOptions(countryEntityList);
    });

    // Actualiza la visibilidad de los indicadores
    selects.forEach(select => {
        select.addEventListener('change', updateSelectIndicators);
    });

    // Manejador para continuar en base al "typeEntity"
    typeEntity.addEventListener('change', handleStep);

    continueButtons.forEach(button => {
        button.addEventListener('click', handleStep);
    });

    // Inicializa la visibilidad de indicadores de los selects
    updateSelectIndicators();

    // Funciones reutilizables
    function clearCheckEntities() {
        checkEntity.forEach(otherCheck => {
            otherCheck.checked = false;
        });
    }

    function uncheckOthers(selectedCheck) {
        checkEntity.forEach(otherCheck => {
            if (otherCheck !== selectedCheck) {
                otherCheck.checked = false;
            }
        });
    }

    function toggleDisplay(element, condition) {
        element.style.display = condition ? 'block' : 'none';
    }

    function displayInfoModal() {
        Swal.fire({
            title: 'Información importante',
            html: `Por las particularidades de su situación, su caso no puede ser cubierto por las funciones de esta plataforma. Le sugerimos contactarnos directamente a <a href='mailto:info@giin.tax'>info@giin.tax</a> para brindarle asesoría personalizada en el llenado de sus formularios. Tenga en cuenta que para este servicio se aplicarán honorarios profesionales.`,
            icon: 'info',
            confirmButtonText: 'Ok'
        });
    }

    function getCountryEntities() {
        return {
            "ar": ["Sociedad Anónima", "Sociedad de Responsabilidad Limitada", "Sociedad Anónima Unipersonal (S.A.U.)"],
            "aru": ["“Naamloze Vennootschap (N.V.)", "Besloten Vennootschap (B.V.)"],
            "bah": ["International Business Company","Limited Liability Company"],
            "bar": ["Limited Company", "Limited Liabilty Company", "International Business Company"],
            "bel": ["Public Limited Company", "Limited Liability Company"],
            "ber": ["Exempted Company"],
            "bol":["Sociedad Anónima", "Sociedad de Responsabilidad Limitada"],
            "bra": ["Sociedade Anonima", "LTDA"],
            "bri": ["BVI Business Company", "Limited Liability Company"],
            "cay": ["Exempted Company", "Limited Liability Company"],
            "chi": ["Sociedad Anónima", "Sociedad de Responsabilidad Limitada"],
            "col": ["Sociedad Anónima", "Sociedad por Acciones Simplificada (S.A.S.)"],
            "cos": ["Sociedad Anónima", "Sociedad de Responsabilidad Limitada"],
            "cur": ["Naamloze Vennootschap (N.V.)", "Besloten Vennootschap (B.V.)"],
            "ecu": ["Sociedad Anónima", "Compañía Anónima", "Sociedad de Responsabilidad Limitada"],
            "esp": ["Sociedad Anónima", "Sociedad de Responsabilidad Limitada (S.L.)", "Sociedad Limitada Nueva Empresa (SLNE)"],
            "sal": ["Sociedad Anónima", "Sociedad de Responsabilidad Limitada", "Sociedad Anónima de Capital Variable"],
            "gua": ["Sociedad Anónima", "Sociedad de Responsabilidad Limitada", "Sociedad Anónima de Capital Variable"],
            "hon": ["Sociedad Anónima", "Sociedad de Responsabilidad Limitada"],
            "hong": ["Public Limited Company"],
            "jam": ["Public Limited Company"],
            "mal": ["Public Limited Company"],
            "mex": ["Sociedad Anónima", "Sociedad Anónima de Capital Variable", "Sociedad de Responsabilidad Limitada"],
            "nic": ["Compañía Anónima", "Sociedad de Responsabilidad Limitada", "constituida en Nicaragua"],
            "pan": ["“Sociedad Anónima ” (S.A.) (Inc.) (Corp.)", "Sociedad de Responsabilidad Limitada"],
            "par": ["Sociedad Anónima", "Sociedad de Responsabilidad Limitada"],
            "per": ["Sociedad Anónima", "Sociedad de Responsabilidad Limitada"],
            "por": ["Sociedade Anónima (S.A.)", "Sociedade por Quotas (Lda.)", "Sociedade Unipessoal por Quotas", "Sociedade por Quotas de Responsabilidade Limitada com Participação em Beneficios (Lda. com PAB)"],
            "kitt": ["International Business Company", "Limited Liability Company"],
            "uru": ["Sociedad Anónima", "Sociedad de Responsabilidad Limitada"],
            "ven": ["Sociedad Anónima", "Compañía Anónima", "Sociedad de Responsabilidad Limitada"],
            "otro": ["otro"]
        };
    }

    function updateTypeEntityOptions(entities = []) {
        typeEntity.innerHTML = `<option value="0">Seleccione una opción</option>`;
        entities.forEach(entity => {
            typeEntity.innerHTML += `<option value="${entity.replace(/\s+/g, '')}">${entity}</option>`;
        });
    }

    function updateSelectIndicators() {
        selects.forEach((select, index) => {
            const indicator = indicators[index];
            toggleDisplay(indicator, select.value !== '0');
        });
    }

    function handleStep() {
        const selectedValue = typeEntity.value;
        if (['fideicomiso', 'fundacion', 'stichting'].includes(selectedValue)) {
            step(4, selectedValue === 'fideicomiso' ? 5 : selectedValue === 'fundacion' ? 6 : 7);
        } else if (selectedValue === 'none') {
            displayInfoModal();
        }
    }

    function step(fromStep, toStep) {
        document.querySelector(`#step${fromStep}`).style.display = 'none';
        document.querySelector(`#step${toStep}`).style.display = 'flex';
    }

    // Lógica para formularios complejos (ejemplo: fideicomisos, fundaciones)
    function handleComplexFormStep(isTrue, nextStepYes, nextStepNo) {
        toggleDisplay(isShow, isTrue === 'yes');
        if (isTrue === 'no') {
            displayInfoModal();
        } else {
            step(5, isTrue === 'yes' ? nextStepYes : nextStepNo);
        }
    }
});
