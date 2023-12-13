function makePayment() {
    showProcessingUI();

    simulatePayment()
      .then(() => showSuccessUI())
      .catch(() => showFailureUI());
  }

  function simulatePayment() {
    return new Promise((resolve, reject) => {
      const isPaymentAccepted = Math.random() < 0.8; 

      setTimeout(() => {
        if (isPaymentAccepted) {
          resolve();
        } else {
          reject();
        }
      }, 2000); 
    });
  }

  function showProcessingUI() {
    document.getElementById('processingUI').style.display = 'block';
  }

  function showSuccessUI() {
    document.getElementById('processingUI').style.display = 'none';
    document.getElementById('successUI').style.display = 'block';
  }

  function showFailureUI() {
    document.getElementById('processingUI').style.display = 'none';
    document.getElementById('failureUI').style.display = 'block';
  }