document.addEventListener("DOMContentLoaded", function() {
    const fisicalEntity = document.querySelector("#fisicalorentity");
    const country = document.querySelector("#country");
    const checkEntity = document.querySelectorAll(".check-entity input");
    const checkEntityContainer = document.querySelector(".check-entity");
    const countryEntity = document.querySelector(".country-entity");
    const typeEntity = document.querySelector('#typeentity');

    fisicalEntity.addEventListener("change", (e) => {
        const fisicalEntityValue = e.target.value;

        if(fisicalEntityValue && fisicalEntityValue == 'fisical'){
            localStorage.setItem("formulario", "W-8BEN");
            checkEntity.forEach(otherCheck => {
                otherCheck.checked = false;
            });
        }else{
            localStorage.removeItem("formulario");
        }

        if (fisicalEntityValue == 'entity') {
            checkEntityContainer.style.display = "block"; 
        }else{
            checkEntityContainer.style.display = "none";
            countryEntity.style.display = "none";
        }
    });

    let lastChecked = null;

    checkEntity && (
        checkEntity.forEach(check => {
            check.addEventListener("change", (e) => {
                if (e.target.checked) {
                    checkEntity.forEach(otherCheck => {
                        if (otherCheck !== e.target) {
                            otherCheck.checked = false;
                        }
                    });
                    lastChecked = e.target;
                } else {
                    e.target.checked = true;
                };

                if(lastChecked.id == 'financial-institution' || lastChecked.id == 'patrimonial-entity'){
                    countryEntity.style.display = 'none'
                    Swal.fire({
                        title: 'Información importante',
                        html: `Por las particularidades de su situación, su caso no puede ser cubierto por las funciones de esta plataforma. Le sugerimos contactarnos directamente a <a href='mailto:info@giin.tax' style='font-weight='bold''>info@giin.tax</a> para brindarle asesoría personalizada en el llenado de sus formularios. Tenga en cuenta que para este servicio se aplicarán honorarios profesionales. Estaremos encantados de atenderle.`,
                        icon: 'info',
                        confirmButtonText: 'Ok'
                    })

                }

                if(lastChecked.id == 'none-above'){
                    countryEntity.style.display = 'flex';
                }else{
                    countryEntity.style.display = 'none';
                }
            });
        })
    )

    country && (
        country.addEventListener("change", (e) => {
            const countryValue = e.target.value;
        
            const countryEntity = {
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
        
            const arrayEntity = countryEntity[countryValue];
            
            if(arrayEntity){
                typeEntity.innerHTML = `
                <option value="0">Seleccione una opción</option>
                ${arrayEntity.map(entity => `<option value="${entity.replace(/\s+/g, '')}">${entity}</option>`).join("")}`;
            }
        })
    );

});

const selects = document.querySelectorAll('select');
const inputCheck = document.querySelectorAll('input[type="checkbox"]');
const indicators = document.querySelectorAll('.response-indicator');

function updateSelectIndicators() {
    const selectsCheck = document.querySelectorAll('.response-indicator');
    
    selects.forEach((select, index) => {
        if (select.value === '0') {
            selectsCheck[index].style.display = 'none';
        } else {
            selectsCheck[index].style.display = 'block';
        }
    });

}

selects.forEach(select => {
    select.addEventListener('change', updateSelectIndicators);
});

document.addEventListener('DOMContentLoaded', updateSelectIndicators);

function step(number1, number2) {
    let actuallyContent = document.querySelector(`#step${number1}`);
    let nextContent = document.querySelector(`#step${number2}`);

    actuallyContent.style.display = 'none';
    
    nextContent.style.display = 'flex';
}