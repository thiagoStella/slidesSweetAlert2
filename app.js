// botões icone
const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const d = document.querySelector('.d');
const e = document.querySelector('.e');

// botões do alerta basico
const botao = document.querySelector('.botao');
const botao2 = document.querySelector('.botao2');
const botao3 = document.querySelector('.botao3');
const botao4 = document.querySelector('.botao4');
const botao5 = document.querySelector('.botao5');
const botao6 = document.querySelector('.botao6');
// botões do alerta função
const botao10 = document.querySelector('.botao10');
const botao11 = document.querySelector('.botao11');
const botao12 = document.querySelector('.botao12');
const botao13 = document.querySelector('.botao13');
const botao14 = document.querySelector('.botao14');

const custom = document.querySelector('.custom');

a.onclick = () => {
    Swal.fire(
        '',
        '',
        'success'
      )
};
b.onclick = () => {
    Swal.fire(
        '',
        '',
        'error'
      )
};
c.onclick = () => {
    Swal.fire(
        '',
        '',
        'warning'
      )
};
d.onclick = () => {
    Swal.fire(
        '',
        '',
        'info'
      )
};
e.onclick = () => {
    Swal.fire(
        '',
        '',
        'question'
      )
};


botao.onclick = () => {
    alert('Um alerta comum');
};

botao2.onclick = () => {
    Swal.fire(
        'Viu!?',
        'Bem mais legal né!',
        'success'
      )
};

botao3.onclick = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo de errado não deu certo!',
        footer: '<a href="https://sweetalert2.github.io/">Como resolver meu problema?</a>'
      })
};

botao4.onclick = () => {
    Swal.fire({
        imageUrl: 'https://picsum.photos/300/200',
    })
};

botao5.onclick = () => {
    Swal.fire({
        title: 'Gostaria de salvar as alterações',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Salvar',
        denyButtonText: 'Não salvar',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Tudo certo!', 'os seus arquivos estão a salvo', 'success')
    } else if (result.isDenied) {
      Swal.fire('As alterações não foram salvas', '', 'error')
    }
  })
};

botao6.onclick = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'As alterações foram salvas',
        text: '(vou fechar em 3 segundos)',
        showConfirmButton: false,
        timer: 3000
  })
};

botao10.onclick = () => {
    Swal.fire({
        title: 'Input email address',
        input: 'email',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address'
      })
      
      if (email) {
        Swal.fire(`Entered email: ${email}`)
      }
};

botao11.onclick = () => {
    Swal.fire({
        input: 'url',
        inputLabel: 'Endereço da URL:',
        inputPlaceholder: 'Digite uma URL válida'
      })
};

botao12.onclick = () => {
    Swal.fire({
        title: 'Enter your password',
        input: 'password',
        inputLabel: 'Password',
        inputPlaceholder: 'Enter your password',
        inputAttributes: {
          maxlength: 10,
          autocapitalize: 'off',
          autocorrect: 'off'
        }
      })
      
      if (password) {
        Swal.fire(`Entered password: ${password}`)
      }
};

botao13.onclick = () => {
    Swal.fire({
        input: 'textarea',
        inputLabel: 'Message',
        inputPlaceholder: 'Digite sua menssagem...',
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: true
      })
      
      if (text) {
        Swal.fire(text)
      }
};

botao14.onclick = () => {
    Swal.fire({
        title: 'Select field validation',
        input: 'select',
        inputOptions: {
          'Konoha': {
            sasuke: 'Sasuke',
            sakura: 'Sakura',
            kakashi: 'Kakashi',
            naruto: 'Naruto'
          },
          'Akatsuki': {
            pain: 'Pain',
            konan: 'Konan',
            nagato: 'Carrot'
          },
          
        },
        inputPlaceholder: 'Selecione o personagem mais descolado',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === 'kakashi') {
              resolve()
            } else {
              resolve('Você precisa selecionar o Kakashi :)')
            }
          })
        }
      })
      
};

custom.onclick = () => {
    Swal.fire({
        position: 'top-end',
        width: 500,
        background:' rgb(0, 0, 0)',
        color: 'white',
        title: 'PRECISO DE DINHEIRO!',
        text: 'faz um pix pra mim?',
        showConfirmButton: true,
        showCancelButton: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        showCloseButton: false,
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://media0.giphy.com/media/L3bj6t3opdeNddYCyl/giphy.gif?cid=ecf05e47hyye6k71hlcgkx1xaak8qnurtwoyhug91rqpd8jm&rid=giphy.gif&ct=g")
            left top
            no-repeat
            
      `
        }
      )
};