//const countriesContainer = document.querySelector('#countries');

let personaFisica = [
    {"id": "name-lastname", "value": "", "required": false},
    {"id": "livingeeuu", "value": "", "required": true},
    {"id": "nationality", "value": "", "required": true},
    {"id": "writedirection", "value": "", "required": false},
    {"id": "writedirection2", "value": "", "required": false},
    {"id": "writetaxpayer", "value": "", "required": false},
    {"id": "birthdate0", "value": "", "required": false},
    {"id": "birthdate01", "value": "", "required": false}
];

let formularioFideicomisoTrust = [
    {"id": "trust-fideicomiso", "value": "", "required": false},
    {"id": "countries-law2", "value": "", "required": false},
    {"id": "street-address", "value": "", "required": false},
    {"id": "countries", "value": "", "required": false},
    {"id": "trustee-email", "value": "", "required": false},
    {"id": "countries-3", "value": "", "required": false},
    {"id": "birthdate06", "value": "", "required": false},
    {"id": "name-sing", "value": "", "required": false}
];

let custionarioA =[
    {"id": "benename", "value": "", "required": false},
    {"id": "benecountry", "value": "", "required": false},
    {"id": "benenationality", "value": "", "required": false},
    {"id": "benecountry3", "value": "", "required": false},
    {"id": "benecountry1", "value": "", "required": false},
    {"id": "benepostal", "value": "", "required": false},
    {"id": "benedirection", "value": "", "required": false},
    {"id": "numberid", "value": "", "required": false},
    {"id": "benedate0", "value": "", "required": false},
    {"id": "benedate01", "value": "", "required": false},
];

let countries = [ 
    {name: 'Afghanistan', code: 'AF'}, 
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'}, 
    {name: 'Algeria', code: 'DZ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'AndorrA', code: 'AD'}, 
    {name: 'Angola', code: 'AO'}, 
    {name: 'Anguilla', code: 'AI'}, 
    {name: 'Antarctica', code: 'AQ'}, 
    {name: 'Antigua and Barbuda', code: 'AG'}, 
    {name: 'Argentina', code: 'AR'}, 
    {name: 'Armenia', code: 'AM'}, 
    {name: 'Aruba', code: 'AW'}, 
    {name: 'Australia', code: 'AU'}, 
    {name: 'Austria', code: 'AT'}, 
    {name: 'Azerbaijan', code: 'AZ'}, 
    {name: 'Bahamas', code: 'BS'}, 
    {name: 'Bahrain', code: 'BH'}, 
    {name: 'Bangladesh', code: 'BD'}, 
    {name: 'Barbados', code: 'BB'}, 
    {name: 'Belarus', code: 'BY'}, 
    {name: 'Belgium', code: 'BE'}, 
    {name: 'Belize', code: 'BZ'}, 
    {name: 'Benin', code: 'BJ'}, 
    {name: 'Bermuda', code: 'BM'}, 
    {name: 'Bhutan', code: 'BT'}, 
    {name: 'Bolivia', code: 'BO'}, 
    {name: 'Bosnia and Herzegovina', code: 'BA'}, 
    {name: 'Botswana', code: 'BW'}, 
    {name: 'Bouvet Island', code: 'BV'}, 
    {name: 'Brazil', code: 'BR'}, 
    {name: 'British Indian Ocean Territory', code: 'IO'}, 
    {name: 'Brunei Darussalam', code: 'BN'}, 
    {name: 'Bulgaria', code: 'BG'}, 
    {name: 'Burkina Faso', code: 'BF'}, 
    {name: 'Burundi', code: 'BI'}, 
    {name: 'Cambodia', code: 'KH'}, 
    {name: 'Cameroon', code: 'CM'}, 
    {name: 'Canada', code: 'CA'}, 
    {name: 'Cape Verde', code: 'CV'}, 
    {name: 'Cayman Islands', code: 'KY'}, 
    {name: 'Central African Republic', code: 'CF'}, 
    {name: 'Chad', code: 'TD'}, 
    {name: 'Chile', code: 'CL'}, 
    {name: 'China', code: 'CN'}, 
    {name: 'Christmas Island', code: 'CX'}, 
    {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
    {name: 'Colombia', code: 'CO'}, 
    {name: 'Comoros', code: 'KM'}, 
    {name: 'Congo', code: 'CG'}, 
    {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
    {name: 'Cook Islands', code: 'CK'}, 
    {name: 'Costa Rica', code: 'CR'}, 
    {name: 'Cote D\'Ivoire', code: 'CI'}, 
    {name: 'Croatia', code: 'HR'}, 
    {name: 'Cuba', code: 'CU'}, 
    {name: 'Cyprus', code: 'CY'}, 
    {name: 'Czech Republic', code: 'CZ'}, 
    {name: 'Denmark', code: 'DK'}, 
    {name: 'Djibouti', code: 'DJ'}, 
    {name: 'Dominica', code: 'DM'}, 
    {name: 'Dominican Republic', code: 'DO'}, 
    {name: 'Ecuador', code: 'EC'}, 
    {name: 'Egypt', code: 'EG'}, 
    {name: 'El Salvador', code: 'SV'}, 
    {name: 'Equatorial Guinea', code: 'GQ'}, 
    {name: 'Eritrea', code: 'ER'}, 
    {name: 'Estonia', code: 'EE'}, 
    {name: 'Ethiopia', code: 'ET'}, 
    {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
    {name: 'Faroe Islands', code: 'FO'}, 
    {name: 'Fiji', code: 'FJ'}, 
    {name: 'Finland', code: 'FI'}, 
    {name: 'France', code: 'FR'}, 
    {name: 'French Guiana', code: 'GF'}, 
    {name: 'French Polynesia', code: 'PF'}, 
    {name: 'French Southern Territories', code: 'TF'}, 
    {name: 'Gabon', code: 'GA'}, 
    {name: 'Gambia', code: 'GM'}, 
    {name: 'Georgia', code: 'GE'}, 
    {name: 'Germany', code: 'DE'}, 
    {name: 'Ghana', code: 'GH'}, 
    {name: 'Gibraltar', code: 'GI'}, 
    {name: 'Greece', code: 'GR'}, 
    {name: 'Greenland', code: 'GL'}, 
    {name: 'Grenada', code: 'GD'}, 
    {name: 'Guadeloupe', code: 'GP'}, 
    {name: 'Guam', code: 'GU'}, 
    {name: 'Guatemala', code: 'GT'}, 
    {name: 'Guernsey', code: 'GG'}, 
    {name: 'Guinea', code: 'GN'}, 
    {name: 'Guinea-Bissau', code: 'GW'}, 
    {name: 'Guyana', code: 'GY'}, 
    {name: 'Haiti', code: 'HT'}, 
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
    {name: 'Holy See (Vatican City State)', code: 'VA'}, 
    {name: 'Honduras', code: 'HN'}, 
    {name: 'Hong Kong', code: 'HK'}, 
    {name: 'Hungary', code: 'HU'}, 
    {name: 'Iceland', code: 'IS'}, 
    {name: 'India', code: 'IN'}, 
    {name: 'Indonesia', code: 'ID'}, 
    {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
    {name: 'Iraq', code: 'IQ'}, 
    {name: 'Ireland', code: 'IE'}, 
    {name: 'Isle of Man', code: 'IM'}, 
    {name: 'Israel', code: 'IL'}, 
    {name: 'Italy', code: 'IT'}, 
    {name: 'Jamaica', code: 'JM'}, 
    {name: 'Japan', code: 'JP'}, 
    {name: 'Jersey', code: 'JE'}, 
    {name: 'Jordan', code: 'JO'}, 
    {name: 'Kazakhstan', code: 'KZ'}, 
    {name: 'Kenya', code: 'KE'}, 
    {name: 'Kiribati', code: 'KI'}, 
    {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
    {name: 'Korea, Republic of', code: 'KR'}, 
    {name: 'Kuwait', code: 'KW'}, 
    {name: 'Kyrgyzstan', code: 'KG'}, 
    {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
    {name: 'Latvia', code: 'LV'}, 
    {name: 'Lebanon', code: 'LB'}, 
    {name: 'Lesotho', code: 'LS'}, 
    {name: 'Liberia', code: 'LR'}, 
    {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
    {name: 'Liechtenstein', code: 'LI'}, 
    {name: 'Lithuania', code: 'LT'}, 
    {name: 'Luxembourg', code: 'LU'}, 
    {name: 'Macao', code: 'MO'}, 
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
    {name: 'Madagascar', code: 'MG'}, 
    {name: 'Malawi', code: 'MW'}, 
    {name: 'Malaysia', code: 'MY'}, 
    {name: 'Maldives', code: 'MV'}, 
    {name: 'Mali', code: 'ML'}, 
    {name: 'Malta', code: 'MT'}, 
    {name: 'Marshall Islands', code: 'MH'}, 
    {name: 'Martinique', code: 'MQ'}, 
    {name: 'Mauritania', code: 'MR'}, 
    {name: 'Mauritius', code: 'MU'}, 
    {name: 'Mayotte', code: 'YT'}, 
    {name: 'Mexico', code: 'MX'}, 
    {name: 'Micronesia, Federated States of', code: 'FM'}, 
    {name: 'Moldova, Republic of', code: 'MD'}, 
    {name: 'Monaco', code: 'MC'}, 
    {name: 'Mongolia', code: 'MN'}, 
    {name: 'Montserrat', code: 'MS'}, 
    {name: 'Morocco', code: 'MA'}, 
    {name: 'Mozambique', code: 'MZ'}, 
    {name: 'Myanmar', code: 'MM'}, 
    {name: 'Namibia', code: 'NA'}, 
    {name: 'Nauru', code: 'NR'}, 
    {name: 'Nepal', code: 'NP'}, 
    {name: 'Netherlands', code: 'NL'}, 
    {name: 'Netherlands Antilles', code: 'AN'}, 
    {name: 'New Caledonia', code: 'NC'}, 
    {name: 'New Zealand', code: 'NZ'}, 
    {name: 'Nicaragua', code: 'NI'}, 
    {name: 'Niger', code: 'NE'}, 
    {name: 'Nigeria', code: 'NG'}, 
    {name: 'Niue', code: 'NU'}, 
    {name: 'Norfolk Island', code: 'NF'}, 
    {name: 'Northern Mariana Islands', code: 'MP'}, 
    {name: 'Norway', code: 'NO'}, 
    {name: 'Oman', code: 'OM'}, 
    {name: 'Pakistan', code: 'PK'}, 
    {name: 'Palau', code: 'PW'}, 
    {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
    {name: 'Panama', code: 'PA'}, 
    {name: 'Papua New Guinea', code: 'PG'}, 
    {name: 'Paraguay', code: 'PY'}, 
    {name: 'Peru', code: 'PE'}, 
    {name: 'Philippines', code: 'PH'}, 
    {name: 'Pitcairn', code: 'PN'}, 
    {name: 'Poland', code: 'PL'}, 
    {name: 'Portugal', code: 'PT'}, 
    {name: 'Puerto Rico', code: 'PR'}, 
    {name: 'Qatar', code: 'QA'}, 
    {name: 'Reunion', code: 'RE'}, 
    {name: 'Romania', code: 'RO'}, 
    {name: 'Russian Federation', code: 'RU'}, 
    {name: 'RWANDA', code: 'RW'}, 
    {name: 'Saint Helena', code: 'SH'}, 
    {name: 'Saint Kitts and Nevis', code: 'KN'}, 
    {name: 'Saint Lucia', code: 'LC'}, 
    {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
    {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
    {name: 'Samoa', code: 'WS'}, 
    {name: 'San Marino', code: 'SM'}, 
    {name: 'Sao Tome and Principe', code: 'ST'}, 
    {name: 'Saudi Arabia', code: 'SA'}, 
    {name: 'Senegal', code: 'SN'}, 
    {name: 'Serbia and Montenegro', code: 'CS'}, 
    {name: 'Seychelles', code: 'SC'}, 
    {name: 'Sierra Leone', code: 'SL'}, 
    {name: 'Singapore', code: 'SG'}, 
    {name: 'Slovakia', code: 'SK'}, 
    {name: 'Slovenia', code: 'SI'}, 
    {name: 'Solomon Islands', code: 'SB'}, 
    {name: 'Somalia', code: 'SO'}, 
    {name: 'South Africa', code: 'ZA'}, 
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
    {name: 'Spain', code: 'ES'}, 
    {name: 'Sri Lanka', code: 'LK'}, 
    {name: 'Sudan', code: 'SD'}, 
    {name: 'Suriname', code: 'SR'}, 
    {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
    {name: 'Swaziland', code: 'SZ'}, 
    {name: 'Sweden', code: 'SE'}, 
    {name: 'Switzerland', code: 'CH'}, 
    {name: 'Syrian Arab Republic', code: 'SY'}, 
    {name: 'Taiwan, Province of China', code: 'TW'}, 
    {name: 'Tajikistan', code: 'TJ'}, 
    {name: 'Tanzania, United Republic of', code: 'TZ'}, 
    {name: 'Thailand', code: 'TH'}, 
    {name: 'Timor-Leste', code: 'TL'}, 
    {name: 'Togo', code: 'TG'}, 
    {name: 'Tokelau', code: 'TK'}, 
    {name: 'Tonga', code: 'TO'}, 
    {name: 'Trinidad and Tobago', code: 'TT'}, 
    {name: 'Tunisia', code: 'TN'}, 
    {name: 'Turkey', code: 'TR'}, 
    {name: 'Turkmenistan', code: 'TM'}, 
    {name: 'Turks and Caicos Islands', code: 'TC'}, 
    {name: 'Tuvalu', code: 'TV'}, 
    {name: 'Uganda', code: 'UG'}, 
    {name: 'Ukraine', code: 'UA'}, 
    {name: 'United Arab Emirates', code: 'AE'}, 
    {name: 'United Kingdom', code: 'GB'}, 
    {name: 'United States', code: 'US'}, 
    {name: 'United States Minor Outlying Islands', code: 'UM'}, 
    {name: 'Uruguay', code: 'UY'}, 
    {name: 'Uzbekistan', code: 'UZ'}, 
    {name: 'Vanuatu', code: 'VU'}, 
    {name: 'Venezuela', code: 'VE'}, 
    {name: 'Viet Nam', code: 'VN'}, 
    {name: 'Virgin Islands, British', code: 'VG'}, 
    {name: 'Virgin Islands, U.S.', code: 'VI'}, 
    {name: 'Wallis and Futuna', code: 'WF'}, 
    {name: 'Western Sahara', code: 'EH'}, 
    {name: 'Yemen', code: 'YE'}, 
    {name: 'Zambia', code: 'ZM'}, 
    {name: 'Zimbabwe', code: 'ZW'} 
];

document.addEventListener('DOMContentLoaded', () => {

    const fisicalOrEntity = document.querySelector('#fisical-or-entity');
    const financialInstitution = document.querySelector('#financial-institution');
    const patrimonialEntity = document.querySelector('#patrimonial-entity');
    const noneAbove = document.querySelector('#none-above');
    const buttonFirst = document.querySelector('#buttonFirst');
    const checkEntity = document.querySelector('#check-entity');
    const countryEntity = document.querySelector('#country-entity');
    const country = document.querySelector('#country');
    const typeEntity = document.querySelector('#typeentity');
    const entityContainer = document.querySelector('.entity-type-container');

    let selectedOption = null;
    let isFinancial = false;
    let isPatrimonial = false;
    let isNoneAbove = false;

    const checkboxes = [financialInstitution, patrimonialEntity, noneAbove];

    function handleCheckboxSelection(e) {
        checkboxes.forEach((checkbox) => {
            if (checkbox !== e.target) {
                checkbox.checked = false;
            }
        });
    }

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', handleCheckboxSelection);
    });

    function updateValues00() {
        selectedOption = fisicalOrEntity.value;
        isFinancial = financialInstitution.checked;
        isPatrimonial = patrimonialEntity.checked;
        isNoneAbove = noneAbove.checked;

        checkValues00();
    }

    function checkValues00() {
        selectedOption = fisicalOrEntity.value;
        isFinancial = financialInstitution.checked;
        isPatrimonial = patrimonialEntity.checked;
        isNoneAbove = noneAbove.checked;

        if (selectedOption === 'fisical') {
            countryEntity.style.display = 'none';
            checkEntity.style.display = 'none';
            checkboxes.forEach((checkbox) => {
                checkbox.checked = false;
            });
            noneAbove.checked = false;
            step(1, 2); 
            return;
        }

        if (selectedOption === 'entity') {
            checkEntity.style.display = 'block';

            if (isFinancial || isPatrimonial) {
                displayInfoModal();
                return;
            }

            if (isNoneAbove) {
                countryEntity.style.display = 'flex';
                // Esto asegura que se habilite country cuando sea necesario
                country.addEventListener('change', handleCountryChange); 
            } else {
                countryEntity.style.display = 'none';
            }
        }
    }

    function handleCountryChange(e) {
        const countryValue = e.target.value;

        const countryEntityMap = {
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
            "nic": ["Compañía Anónima", "Sociedad de Responsabilidad Limitada"],
            "pan": ["“Sociedad Anónima ” (S.A.) (Inc.) (Corp.)", "Sociedad de Responsabilidad Limitada"],
            "par": ["Sociedad Anónima", "Sociedad de Responsabilidad Limitada"],
            "per": ["Sociedad Anónima", "Sociedad Anónima Cerrada (SAC)", "Sociedad de Responsabilidad Limitada"],
            "por": ["Sociedade Anónima (S.A.)", "Sociedade por Quotas (Lda.)", "Sociedade Unipessoal por Quotas", "Sociedade por Quotas de Responsabilidade Limitada com Participação em Beneficios (Lda. com PAB)"],
            "kitt": ["International Business Company", "Limited Liability Company"],
            "uru": ["Sociedad Anónima", "Sociedad de Responsabilidad Limitada"],
            "ven": ["Sociedad Anónima", "Compañía Anónima", "Sociedad de Responsabilidad Limitada"],
            "otro": []
        };

        const arrayEntity = countryEntityMap[countryValue] || [];

        if (arrayEntity.length) {
            typeEntity.innerHTML = `
                <option value="0">Seleccione una opción</option>
                ${arrayEntity.map(entity => `<option value="${entity.replace(/\s+/g, '')}">${entity}</option>`).join("")}
            `;
            typeEntity.disabled = false;
            entityContainer.style.display = 'block';
        } else {
            typeEntity.innerHTML = `<option value="0">Seleccione una opción</option>`;
            typeEntity.disabled = true;
            entityContainer.style.display = 'none';
        }
    }

    typeEntity.addEventListener('change', (e) => {
        const countryValue = country.value;
        if (e.target.value !== '0' && countryValue !== '0' && countryValue !== 'otro') {
            step(1, 3); 
        } else if (countryValue === 'otro') {
            step(1, 4); 
        }
    });

    buttonFirst.addEventListener('click', (e) => {
        updateValues00();
    
        if (country.value === 'otro') {
            entityContainer.style.display = 'none';
            step(1, 4); 
            return;
        }
    
        if (selectedOption === 'entity') {
            if (isFinancial || isPatrimonial) {
                displayInfoModal();
            } else if (isNoneAbove) {
                if (country.value !== '') {
                    handleCountryChange({ target: { value: country.value } });
                } else {
                    console.log('Debe seleccionar un país antes de continuar.');
                }
            } else {
                console.log('Debe seleccionar una opción válida antes de continuar.');
            }
        } else {
            if(countryEntity.style.display == 'flex'){
                Swal.fire({
                    title: "Tipo de identidad",
                    text: "Debes seleccionar un tipo de identidad",
                    icon: "info"
                });
            }
        }
    });

    fisicalOrEntity.addEventListener('change', updateValues00);
    financialInstitution.addEventListener('change', updateValues00);
    patrimonialEntity.addEventListener('change', updateValues00);
    noneAbove.addEventListener('change', updateValues00);
});

/* (function ($) {

     // Seleccionamos todos los elementos con la clase 'btn-finalizar'
     document.querySelectorAll('.btn-finalizar').forEach(button => {
         // Agregamos el listener a cada botón
         button.addEventListener('click', function(event) {
            
             const tipo = event.target.getAttribute("data-tipo");      
             const nombreformulario= event.target.getAttribute("date-formulario");          
             const tipoform = event.target.getAttribute("data-variable");  
                        
             let stepForm = document.querySelector(`#${nombreformulario}`);

             console.log(stepForm);

             let erroresValidadores = 0;               
        
             let formData = new FormData();
                
             formData.append('action', 'submit_questionnaire');
             formData.append('nonce', questionnarie_ajax.nonce);  
             formData.append('tipo_formulario', tipo);
             formData.append('tipoform', tipoform);

             stepForm.querySelectorAll('input, select').forEach(input => {

                 let id = input.id;
                 let value = input.value;

                 if(tipoform === "personaFisica"){
                     // Busca el campo en el array por ID
                     let datos = personaFisica.find(field => field.id === id);
                    
                     if (datos) {
                         datos.value = value;

                         if (datos.required && datos.value === "") {
                             erroresValidadores++;
                             // Puedes mostrar algún mensaje de error específico aquí
                             console.log(`El campo ${datos.id} es requerido.`);
                         }else{
                             formData.append(id, value);
                         }
                     }
                 }

                 if(tipoform === "formularioFideicomisoTrust"){

//                     // Busca el campo en el array por ID
                     let datos = formularioFideicomisoTrust.find(field => field.id === id);
                    
                     if (datos) {
                         datos.value = value;

                         if (datos.required && datos.value === "") {
                             erroresValidadores++;
                             // Puedes mostrar algún mensaje de error específico aquí
                             console.log(`El campo ${datos.id} es requerido.`);
                         }else{
                             formData.append(id, value);
                         }
                     }

                 }

                 if(tipoform === "custionarioA"){

                     // Busca el campo en el array por ID
                     let datos = custionarioA.find(field => field.id === id);
                    
                     if (datos) {
                         datos.value = value;

                         if (datos.required && datos.value === "") {
                             erroresValidadores++;
                             // Puedes mostrar algún mensaje de error específico aquí
                             console.log(`El campo ${datos.id} es requerido.`);
                         }else{
                            formData.append(id, value);
                         }
                     }

                 }
             });

             if(erroresValidadores > 0){
                 console.log("No están completos los campos requeridos.");
                 alert('Por favor, complete todos los campos requeridos.');
                 return; // Detener el flujo si hay errores            
             }else{
                
                 $.ajax({
                     url: questionnarie_ajax.ajax_url,
                     type: 'POST',
                     data: formData,
                     processData: false,
                     contentType: false,
                     beforeSend: function () {
                         // Mostrar un loader si es necesario
                     },
                     success: function (response) {
                         console.log(response);
                         let data = JSON.parse(response);
                         if (data.code == 0) {
                             window.location.href = data.url;                         
                         } else {
                             alert('Hubo un error al enviar el formulario.');
                             location.reload();
                         }
                     },
                     error: function () {
                         alert('Error de conexión.');
                         location.reload();
                     }
                 });
             }
                        
            

         });
     });

 })(jQuery);*/

document.addEventListener('DOMContentLoaded', () => {
    const livingEeuu = document.querySelector('#livingeeuu');

    console.log(livingEeuu);

    livingEeuu?.addEventListener('change', () => {
        const selectedValue = livingEeuu.value;
        console.log(selectedValue);
        if(selectedValue == 'yes'){
            document.querySelector('.AreLivingEEUU').style.display = 'none';
            displayInfoModal2();
        }
        if(selectedValue == 'no'){
            document.querySelector('.AreLivingEEUU').style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const typeEntity = document.querySelector('#typeEntity');
    const continueButton = document.querySelectorAll('.tax-button-primary.steps');

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
        if (isTrue != 0 && isTrue2 != 0) {
            if (isTrue === 'yes' && isTrue2 === 'yes') {
                isShow.style.display = 'none';
                displayInfoModal();
            } 
            if (isTrue === 'no' || isTrue2 === 'no') {
                isShow.style.display = 'block';
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

    const countriesContainer = document.querySelector('#countries');

      countriesContainer.innerHTML = `
        <option value='0' selected disabled>Seleccione una opción</option>
        ${countries
            .filter(entity => entity.name !== 'United States')
            .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
            .join("")}      
            `;
});

document.addEventListener('DOMContentLoaded', () => {

    const countriesContainer2 = document.querySelector('#countries-2');

      countriesContainer2.innerHTML = `
        <option value='0' selected disabled>Seleccione una opción</option>
        ${countries
            .filter(entity => entity.name !== 'United States')
            .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
            .join("")}      
            `;
});

document.addEventListener('DOMContentLoaded', () => {

    const countriesLaw3 = document.querySelector('#countries-law3');

      countriesLaw3.innerHTML = `
        <option value='0' selected disabled>Seleccione una opción</option>
        ${countries
            .filter(entity => entity.name !== 'United States')
            .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
            .join("")}      
            `;
});

document.addEventListener('DOMContentLoaded', () => {

    const countriesEmail = document.querySelector('#trustee-email2');

      countriesEmail.innerHTML = `
        <option value='0' selected disabled>Seleccione una opción</option>
        ${countries
            .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
            .join("")}      
            `;
});

document.addEventListener('DOMContentLoaded', () => {

    const stichtCountry02 = document.querySelector('#sticht-country02');

      stichtCountry02.innerHTML = `
        <option value='0' selected disabled>Seleccione una opción</option>
        ${countries
            .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
            .join("")}      
            `;
});

document.addEventListener('DOMContentLoaded', () => {

    const stichtCountry002 = document.querySelector('#sticht-country002');

      stichtCountry002.innerHTML = `
        <option value='0' selected disabled>Seleccione una opción</option>
        ${countries
            .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
            .join("")}      
            `;
});

document.addEventListener('DOMContentLoaded', () => {

    const stichtCountry004 = document.querySelector('#sticht-country004');

      stichtCountry004.innerHTML = `
        <option value='0' selected disabled>Seleccione una opción</option>
        ${countries
            .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
            .join("")}      
            `;
});

document.addEventListener('DOMContentLoaded', () => {

    const countries3 = document.querySelector('#countries-3');

      countries3.innerHTML = `
        <option value='0' selected disabled>Seleccione una opción</option>
        ${countries
            .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
            .join("")}      
            `;
});

document.addEventListener('DOMContentLoaded', () => {

    const trusteDirection = document.querySelector('#truste-direction');

      trusteDirection.innerHTML = `
        <option value='0' selected disabled>Seleccione una opción</option>
        ${countries
            .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
            .join("")}      
            `;
});

document.addEventListener('DOMContentLoaded', () => {

    const trusteeCountry2 = document.querySelector('#trustee-country2');

      trusteeCountry2.innerHTML = `
        <option value='0' selected disabled>Seleccione una opción</option>
        ${countries
            .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
            .join("")}      
            `;
});

document.addEventListener('DOMContentLoaded', () => {

    const directionCountry3 = document.querySelector('#direction-country3');

      directionCountry3.innerHTML = `
        <option value='0' selected disabled>Seleccione una opción</option>
        ${countries
            .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
            .join("")}      
            `;
});

document.addEventListener('DOMContentLoaded', () => {

    const directionCountry2 = document.querySelector('#direction-country2');

      directionCountry2.innerHTML = `
        <option value='0' selected disabled>Seleccione una opción</option>
        ${countries
            .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
            .join("")}      
            `;
});

document.addEventListener('DOMContentLoaded', () => {

    const beneCountry2 = document.querySelector('#benecountry2');

    beneCountry2.innerHTML = `
    <option value='0' selected disabled>Seleccione una opción</option>
    ${countries
        .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
        .join("")}      
        `;

});

document.addEventListener('DOMContentLoaded', () => {

    const writedirection2 = document.querySelector('#writedirection2');

    writedirection2.innerHTML = `
    <option value='0' selected disabled>Seleccione una opción</option>
    ${countries
        .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
        .join("")}      
        `;

});

document.addEventListener('DOMContentLoaded', () => {

    const countries2 = [
        {name: 'Chile', code: 'CL'}, 
        {name: 'España', code: 'ES'}, 
        {name: 'Mexico', code: 'MX'}, 
        {name: 'Portugal', code: 'PT'}, 
        {name: 'Venezuela', code: 'VE'}
    ]
    
    const beneCountry3 = document.querySelector('#benecountry3');
    const beneNationality = document.querySelector('#benenationality');

    beneNationality.addEventListener('change', (e) => {
        if(e.target.value == 'yes'){
            console.log(e.target.value);
            console.log(beneCountry3);

            beneCountry3.style.display = 'block';
            beneCountry3.innerHTML = `
            <option value='0' selected disabled>Seleccione una opción</option>
            ${countries2
                .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
                .join("")}      
                `;
        }else{
            beneCountry3.style.display = 'none';
            beneCountry3.innerHTML = `
            <option value='0' selected disabled>Seleccione una opción</option>   
                `;
        }
    });


});

document.addEventListener('DOMContentLoaded', () => {

    const countriesLaw2 = document.querySelector('#countries-law2');

      countriesLaw2.innerHTML = `
        <option value='0' selected disabled>Seleccione una opción</option>
        ${countries
            .filter(entity => entity.name !== 'United States')
            .map(entity => `<option value="${entity.name}">${entity.name}</option>`)
            .join("")}      
            `;
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

//Funcionalidad de pasos, para poder moverse a diferentes contenedores
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

//Funcionalidad de validación de formularios, para el manejo informativo.
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

  function displayInfoModal2() {
    Swal.fire({
      position: "center",
      icon: "info",
      title: "Información importante",
      text: "Por las particularidades de su situación, su caso no puede ser cubierto por las funciones de esta plataforma. Le sugerimos contactarnos directamente a info@giin.tax para brindarle asesoría personalizada en el llenado de sus formularios. Tenga en cuenta que para este servicio se aplicarán honorarios profesionales.",
      showConfirmButton: true,
    }).then(() => {
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
    });
}