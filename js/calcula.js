 var forma = document.getElementById("forma"),
            outSalida = document.getElementById("outSalida"),
            txtfecha = forma["fecha"];

        function calcula(){
          var boleta = forma["boleta"].value.trim(),
              nombre = forma["nombre"].value.trim(),
              grupo = forma["grupo"].value.trim(),
              materia = forma["materia"].value.trim(),
              fecha = new Date(txtfecha.value);
          outSalida.textContent = "Boleta: " + boleta + " nombre: " + nombre + " Grupo: " + grupo
                                  + " Materia: " + materia + " Fecha: " + fecha;
        }
