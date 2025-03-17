document.getElementById('summarize').addEventListener('click', async () => {
    const url = document.getElementById('url').value;
  
    if (!url) {
      alert("Por favor, ingresa una URL válida.");
      return;
    }
  
    // Mostrar un mensaje de carga
    document.getElementById('summary-text').textContent = "Generando resumen...";
  
    try {
      // Enviar la URL al backend para procesarla
      const response = await fetch('https://tu-backend.com/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
  
      const data = await response.json();
  
      // Mostrar el resumen
      document.getElementById('summary-text').textContent = data.summary;
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('summary-text').textContent = "Error al generar el resumen. Intenta de nuevo.";
    }
  });