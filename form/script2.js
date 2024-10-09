const fisicalEntity = document.querySelector("#fisicalorentity");
const country = document.querySelector("#country");
const checkEntity = document.querySelectorAll(".check-entity input");
const checkEntityContainer = document.querySelector(".check-entity");
const countryEntity = document.querySelector(".country-entity");
const typeEntity = document.querySelector('#typeentity');
let firstButton = document.querySelector('#buttonFirst');

function displayInfoModal() {
    Swal.fire({
      position: "center",
      icon: "info",
      title: "Información importante",
      text: "Por las particularidades de su situación, su caso no puede ser cubierto por las funciones de esta plataforma. Le sugerimos contactarnos directamente a info@giin.tax para brindarle asesoría personalizada en el llenado de sus formularios. Tenga en cuenta que para este servicio se aplicarán honorarios profesionales.",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¿Desea continuar con el proceso?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Sí',
          cancelButtonText: 'No',
        }).then((confirmResult) => {
          if (!confirmResult.isConfirmed) {
            let timerInterval;
            Swal.fire({
              position: "center",
              icon: "info",
              title: "Le esperamos",
              html: "Este formulario se reiniciará de manera automática en <b></b> segundos.",
              timer: 5000,
              timerProgressBar: true,
              showConfirmButton: false,
              allowOutsideClick: false,
              didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector('b');
                timerInterval = setInterval(() => {
                  b.textContent = Math.round(Swal.getTimerLeft() / 1000);
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
                window.location.reload();
              }
            });
          } else {
            Swal.close();
          }
        });
      }
    });
  }

 document.addEventListener("DOMContentLoaded", function() {

     fisicalEntity.addEventListener("change", (e) => {
         const fisicalEntityValue = e.target.value;

         if(fisicalEntityValue && fisicalEntityValue == 'fisical'){
             localStorage.setItem("formulario", "W-8BEN");
             step(1,2);
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
                     displayInfoModal();

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

             if(countryValue == 'otro'){
                step(1, 4);
             }
        
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
                 "otro": []
             };
        
             const arrayEntity = countryEntity[countryValue];
            
             if(arrayEntity){
                 typeEntity.innerHTML = `
                 <option value="0">Seleccione una opción</option>
                 ${arrayEntity.map(entity => `<option value="${entity.replace(/\s+/g, '')}">${entity}</option>`).join("")}`;
             }
            
            typeEntity.addEventListener('change', (e) => {
                if(e.target.value != '0' && countryValue != '0' && countryValue != 'otro'){
                    step(1, 3);
                }
             });
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
    const allSteps = document.querySelectorAll("[id^='step']");

    let actuallyContent = document.querySelector(`#step${number1}`);
    let nextContent = document.querySelector(`#step${number2}`);

    if (!actuallyContent || !nextContent) {
        console.error(`Paso no encontrado: step${number1} o step${number2}`);
        return;
    }

    allSteps.forEach(step => {
        step.style.display = 'none';
    });

    const validSteps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    if (!validSteps.includes(number1) || !validSteps.includes(number2)) {
        console.error(`Número de paso inválido: ${number1} o ${number2}`);
        return;
    }

    actuallyContent.style.display = 'none';
    nextContent.style.display = 'flex';
}


document.addEventListener('DOMContentLoaded', () => {
    const typeEntity = document.querySelector('#typeEntity');
    const continueButton = document.querySelectorAll('.tax-button-primary');

    function handleStep() {
        const selectedValue = typeEntity.value;
        if(selectedValue == 'fideicomiso'){
            step(4,5);
        }
        if(selectedValue == 'fundacion'){
            step(4,6);
        }
        if(selectedValue == 'stichting'){
            step(4,7);
        }
        if(selectedValue == 'none'){
           displayInfoModal();
        }
    }

    typeEntity.addEventListener('change', handleStep);

    continueButton.forEach(button => {
        button.addEventListener('click', handleStep);
    });
    
});

document.addEventListener('DOMContentLoaded', () => {
    const born = document.querySelector('#born');
    const competent = document.querySelector('#competent');
    const isShow = document.querySelector('#tax-isShow');
    const fideicomiso = document.querySelector('#fideicomiso');
    const revocable = document.querySelector('#revocable');
    const entityFideicomiso = document.querySelector('#entityFideicomiso');
    const fideicomisoContract = document.querySelector('#fideicomisoContract');
    const taxThirdtrue = document.querySelector('#tax-thirdtrue');
    const continueStep8 = document.querySelector('#continue-step8');
    
    let isTrue = null;
    let isTrue2 = null;
    let isTrue01 = null;
    let isTrue02 = null;
    let isTrue03 = null;

    function checkValues() {
        if (isTrue !== 0 && isTrue2 !== 0) {
            if (isTrue === 'yes' && isTrue2 === 'yes') {
                isShow.style.display = 'block';
            } 
            if (isTrue === 'no' || isTrue2 === 'no') {
                isShow.style.display = 'none';
                displayInfoModal();
            }
        }
        if ((isTrue01 != 0 && isTrue02 != 0 && isTrue03 != 0)) {
            if (isTrue01 === 'yes' || isTrue02 === 'yes' || isTrue03 === 'yes') {
                taxThirdtrue.style.display = 'none';
                step(5, 8);
            }
            if (isTrue01 === 'no' && isTrue02 === 'no' && isTrue03 === 'no') {
                taxThirdtrue.style.display = 'block';
                if(fideicomisoContract.value == 'yes') {
                    step(5, 9);
                }
                if(fideicomisoContract.value == 'no'){
                    step(5, 10);
                }
            }
        }
    }

    function updateValues() {
        isTrue = born.value;
        isTrue2 = competent.value;
        isTrue01 = revocable.value;
        isTrue02 = entityFideicomiso.value;
        isTrue03 = fideicomiso.value;

        checkValues();
    }

    born.addEventListener('change', updateValues);
    competent.addEventListener('change', updateValues);
    revocable.addEventListener('change', updateValues);
    entityFideicomiso.addEventListener('change', updateValues);
    fideicomiso.addEventListener('change', updateValues);
    fideicomisoContract.addEventListener('change', updateValues);

    continueStep8.addEventListener('click', (e) => {
        updateValues();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const personEntity = document.querySelector('#person-entity');
    const revocableFoundation = document.querySelector('#revocable-foundation');
    const entityPerson = document.querySelector('#entity-person');
    const foundationRecord = document.querySelector('#foundation-record');
    const continueStep11 = document.querySelector('#continue-step11');
    const taxThirdtrue2 = document.querySelector('#tax-thirdtrue2');

    let isTrue001 = false;
    let isTrue002 = false;
    let isTrue003 = false;

    function checkValues01() {
        if ((isTrue001 != 0 && isTrue002 != 0 && isTrue003 != 0)) {
            if (isTrue001 === 'yes' || isTrue002 === 'yes' || isTrue003 === 'yes') {
                taxThirdtrue2.style.display = 'none';
                step(6, 11);
            }
            if (isTrue001 === 'no' && isTrue002 === 'no' && isTrue003 === 'no') {
                taxThirdtrue2.style.display = 'block';
                if(foundationRecord.value == 'yes') {
                    step(6, 12);
                }
                if(foundationRecord.value == 'no'){
                    step(6, 13);
                }
            }
        }
    }

    function updateValues01() {
        isTrue001 = personEntity.value;
        isTrue002 = revocableFoundation.value;
        isTrue003 = entityPerson.value;

        checkValues01();
    }

    personEntity.addEventListener('change', updateValues01);
    revocableFoundation.addEventListener('change', updateValues01);
    entityPerson.addEventListener('change', updateValues01);
    foundationRecord.addEventListener('change', updateValues01);

    continueStep11.addEventListener('click', (e) => {
        updateValues01();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const taxThirdtrue3 = document.querySelector('#tax-thirdtrue3');
    const stitchEntity = document.querySelector('#sticht-entity');
    const stichtRevocable = document.querySelector('#sticht-revocable');
    const stichtEntityPerson = document.querySelector('#sticht-entity-person');
    const stichtFoundationRecord = document.querySelector('#sticht-foundation-record');
    const continueStep14 = document.querySelector('#continue-step14');

    let isTrue0001 = false;
    let isTrue0002 = false;
    let isTrue0003 = false;

    function checkValues0001() {
        if ((isTrue0001 != false && isTrue0002 != false && isTrue0003 != false)) {
            if(isTrue0001 == 'yes' || isTrue0002 == 'yes' || isTrue0003 == 'yes'){
                step(7, 14);
                taxThirdtrue3.style.display = 'none';
            }
            if(isTrue0001 == 'no' && isTrue0002 == 'no' && isTrue0003 == 'no'){
                taxThirdtrue3.style.display = 'flex';

                if(stichtFoundationRecord.value == 'yes'){
                    step(7, 15);
                }
                if(stichtFoundationRecord.value == 'no'){
                    step(7, 16);
                }
            }
        }
    }

    function updateValues0001() {
        isTrue0001 = stitchEntity.value;
        isTrue0002 = stichtRevocable.value;
        isTrue0003 = stichtEntityPerson.value;

        checkValues0001();
    }

    stitchEntity.addEventListener('change', updateValues0001);
    stichtRevocable.addEventListener('change', updateValues0001);
    stichtEntityPerson.addEventListener('change', updateValues0001);
    stichtFoundationRecord.addEventListener('change', updateValues0001);

    continueStep14.addEventListener('click', (e) => {
        updateValues0001();
    });
});