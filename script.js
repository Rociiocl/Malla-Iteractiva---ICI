const ramos = [
  { id: "intro_mate", nombre: "Introducción a las matemáticas", requisitos: [], año: 1, semestre: 1 },
  { id: "fund_gestion", nombre: "Fundamentos de gestión", requisitos: [], año: 1, semestre: 1 },
  { id: "tec_gestion", nombre: "Tecnologías para la gestión", requisitos: [], año: 1, semestre: 1 },
  { id: "intro_inge", nombre: "Introducción a la ingeniería", requisitos: [], año: 1, semestre: 1 },
  { id: "electivo_pens", nombre: "Electivo desarrollo del pensamiento", requisitos: [], año: 1, semestre: 1 },

  { id: "algebra", nombre: "Álgebra", requisitos: ["intro_mate"], año: 1, semestre: 2 },
  { id: "quimica", nombre: "Química y medio ambiente", requisitos: [], año: 1, semestre: 2 },
  { id: "calculo1", nombre: "Cálculo I", requisitos: ["intro_mate"], año: 1, semestre: 2 },
  { id: "programacion", nombre: "Programación", requisitos: ["tec_gestion"], año: 1, semestre: 2 },
  { id: "electivo_com1", nombre: "Electivo de comunicación I", requisitos: [], año: 1, semestre: 2 },

  { id: "algebra_lin", nombre: "Álgebra lineal", requisitos: ["algebra"], año: 2, semestre: 1 },
  { id: "prob_esta", nombre: "Probabilidad y estadística", requisitos: ["algebra"], año: 2, semestre: 1 },
  { id: "fisica_mec", nombre: "Física mecánica", requisitos: [], año: 2, semestre: 1 },
  { id: "calculo2", nombre: "Cálculo II", requisitos: ["calculo1"], año: 2, semestre: 1 },
  { id: "prog_avz", nombre: "Programación avanzada", requisitos: ["programacion"], año: 2, semestre: 1 },
  { id: "electivo_com2", nombre: "Electivo de comunicación II", requisitos: [], año: 2, semestre: 1 },

  { id: "taller_ind", nombre: "Taller de aplicación industrial", requisitos: ["prob_esta"], año: 2, semestre: 2 },
  { id: "ciencias_mat", nombre: "Ciencias y resistencia de materiales", requisitos: ["fisica_mec"], año: 2, semestre: 2 },
  { id: "calculo3", nombre: "Cálculo III", requisitos: ["calculo2"], año: 2, semestre: 2 },
  { id: "teo_org", nombre: "Teoría organizacional", requisitos: ["fund_gestion"], año: 2, semestre: 2 },
  { id: "ingles1", nombre: "Inglés técnico I", requisitos: [], año: 2, semestre: 2 },

  { id: "optimizacion", nombre: "Optimización", requisitos: ["algebra_lin"], año: 3, semestre: 1 },
  { id: "infer_est", nombre: "Inferencia estadística", requisitos: ["prob_esta"], año: 3, semestre: 1 },
  { id: "contab_costos", nombre: "Contabilidad y costos", requisitos: [], año: 3, semestre: 1 },
  { id: "mecanica_flu", nombre: "Mecánica de fluidos", requisitos: ["fisica_mec"], año: 3, semestre: 1 },
  { id: "ecuaciones", nombre: "Ecuaciones diferenciales", requisitos: ["calculo3"], año: 3, semestre: 1 },
  { id: "ingles2", nombre: "Inglés técnico II", requisitos: ["ingles1"], año: 3, semestre: 1 },

  { id: "invest_op", nombre: "Investigación operativa", requisitos: ["optimizacion"], año: 3, semestre: 2 },
  { id: "micro", nombre: "Microeconomía", requisitos: ["contab_costos"], año: 3, semestre: 2 },
  { id: "termodinamica", nombre: "Termodinámica", requisitos: ["ecuaciones"], año: 3, semestre: 2 },
  { id: "electricidad", nombre: "Electricidad y electromagnetismo", requisitos: ["ecuaciones"], año: 3, semestre: 2 },
  { id: "electivo_pers", nombre: "Electivo desarrollo personal", requisitos: [], año: 3, semestre: 2 },

  { id: "gestion_op1", nombre: "Gestión de operaciones I", requisitos: ["invest_op"], año: 4, semestre: 1 },
  { id: "macro", nombre: "Macroeconomía", requisitos: ["micro"], año: 4, semestre: 1 },
  { id: "inge_econ", nombre: "Ingeniería económica", requisitos: ["contab_costos"], año: 4, semestre: 1 },
  { id: "electronica", nombre: "Electrónica y electrotecnia", requisitos: ["electricidad"], año: 4, semestre: 1 },
  { id: "especialidad1", nombre: "Especialidad I", requisitos: ["teo_org"], año: 4, semestre: 1 },
  { id: "ingles3", nombre: "Inglés técnico III", requisitos: ["ingles2"], año: 4, semestre: 1 },

  { id: "gestion_op2", nombre: "Gestión de operaciones II", requisitos: ["gestion_op1"], año: 4, semestre: 2 },
  { id: "consultoria", nombre: "Consultoría de empresas A+S", requisitos: ["gestion_op1"], año: 4, semestre: 2 },
  { id: "gestion_estr", nombre: "Gestión estratégica", requisitos: ["macro"], año: 4, semestre: 2 },
  { id: "finanzas", nombre: "Finanzas", requisitos: ["inge_econ"], año: 4, semestre: 2 },
  { id: "ecommerce", nombre: "E commerce and E business", requisitos: ["prog_avz"], año: 4, semestre: 2 },
  { id: "ingles4", nombre: "Inglés técnico IV", requisitos: ["ingles3"], año: 4, semestre: 2 },

  { id: "practica1", nombre: "Práctica I", requisitos: [], año: 5, semestre: 1 },
  { id: "procesos", nombre: "Procesos industriales", requisitos: ["gestion_op2"], año: 5, semestre: 1 },
  { id: "innovacion", nombre: "Innovación y emprendimiento", requisitos: ["gestion_estr"], año: 5, semestre: 1 },
  { id: "form_eval", nombre: "Formulación y evaluación de proyectos", requisitos: ["inge_econ"], año: 5, semestre: 1 },
  { id: "eco_reg", nombre: "Economía y desarrollo regional", requisitos: ["inge_econ"], año: 5, semestre: 1 },
  { id: "especialidad2", nombre: "Especialidad II", requisitos: ["especialidad1"], año: 5, semestre: 1 },

  { id: "etica", nombre: "Electivo de ética", requisitos: [], año: 5, semestre: 2 },
  { id: "simulacion", nombre: "Simulación de procesos", requisitos: ["procesos"], año: 5, semestre: 2 },
  { id: "marketing", nombre: "Marketing", requisitos: ["innovacion"], año: 5, semestre: 2 },
  { id: "admin_proj", nombre: "Administración y dirección de proyectos", requisitos: ["form_eval"], año: 5, semestre: 2 },
  { id: "plan_neg", nombre: "Plan de negocios", requisitos: ["form_eval"], año: 5, semestre: 2 },
  { id: "derecho", nombre: "Derecho de empresa y ambiental A+S", requisitos: [], año: 5, semestre: 2 },
  { id: "responsabilidad", nombre: "Electivo de responsabilidad social", requisitos: [], año: 5, semestre: 2 },
  { id: "practica2", nombre: "Práctica II", requisitos: [], año: 5, semestre: 2 },
  { id: "especialidad3", nombre: "Especialidad III", requisitos: ["especialidad2"], año: 5, semestre: 2 },
  { id: "trabajo_titulo", nombre: "Trabajo de título", requisitos: [], año: 5, semestre: 2 }
];

let aprobados = new Set();

function crearMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  const maxAño = Math.max(...ramos.map(r => r.año));

  for (let año = 1; año <= maxAño; año++) {
    for (let semestre = 1; semestre <= 2; semestre++) {
      const columna = document.createElement("div");
      columna.className = "columna";

      const encabezado = document.createElement("h3");
      encabezado.innerText = Año ${año} - Sem ${semestre};
      columna.appendChild(encabezado);

      ramos
        .filter(r => r.año === año && r.semestre === semestre)
        .forEach(ramo => {
          const div = document.createElement("div");
          div.className = "ramo";

          const habilitado = ramo.requisitos.every(r => aprobados.has(r));
          if (!habilitado) div.classList.add("bloqueado");
          if (aprobados.has(ramo.id)) div.classList.add("aprobado");

          div.innerText = ramo.nombre;
          div.onclick = () => {
            if (!habilitado) return;
            if (aprobados.has(ramo.id)) {
              aprobados.delete(ramo.id);
            } else {
              aprobados.add(ramo.id);
            }
            crearMalla();
          };

          columna.appendChild(div);
        });

      malla.appendChild(columna);
    }
  }
}

crearMalla();


function resetear() {
  aprobados.clear();
  crearMalla();
  alert("Malla reiniciada.");
}



console.log("Script cargado y ejecutado correctamente.");
