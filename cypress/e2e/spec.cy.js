describe('Teste de Login', () => 
  {
 
  it('Cadastra Usuario Administrador', () => {
    cy.visit('https://front.serverest.dev/login')
cy.get('[data-testid="cadastrar"]').click();
cy.get('[data-testid="nome"]').click();
cy.get('[data-testid="nome"]').type('Adriano1');
cy.get('[data-testid="email"]').click();
cy.get('[data-testid="email"]').type('adriano.moura@totvs.com.br');
cy.get('[data-testid="password"]').click();
cy.get('[data-testid="password"]').click();
cy.get('[data-testid="password"]').type('123456');
cy.get('[data-testid="checkbox"]').check();
cy.get('[data-testid="cadastrar"]').click;
  })

    it('Cadastra Usuario Comum', () => {
    
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').click();
    cy.get('[data-testid="nome"]').type('Adriano');
    cy.get('[data-testid="email"]').click();
    cy.get('[data-testid="email"]').type('adrianopuc@yahoo.com.br');
    cy.get('[data-testid="password"]').click();
    cy.get('[data-testid="password"]').type('123456');
    cy.get('[data-testid="cadastrar"]').click();
  
  })


  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').click();
    cy.get('[data-testid="email"]').type('adrianopuc@yahoo.com.br');
    cy.get('[data-testid="senha"]').click();
    cy.get('[data-testid="senha"]').type('123456');
    cy.get('[data-testid="entrar"]').click();
    })

    
it('Login com falha tratado', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').click();
    cy.get('[data-testid="email"]').type('adrianopuc@yahoo.com.br');
    cy.get('[data-testid="senha"]').click();
    cy.get('[data-testid="senha"]').type('123');
    cy.get('[data-testid="entrar"]').click();
    cy.get('#root span:nth-child(2)').contains('Email e/ou senha inválidos');
    })

    it('Login com falha NÃO tratado', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').click();
    cy.get('[data-testid="email"]').type('adrianopuc@yahoo.com');
    cy.get('[data-testid="senha"]').click();
    cy.get('[data-testid="senha"]').type('654321');
    cy.get('[data-testid="entrar"]').click();
    cy.get('#root span:nth-child(2)').contains('MENSAGEM DE ERRO DO CYPRESS - login falhou');
    })

        it('Login com falha - Click em algo que não Existe', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').click();
    cy.get('[data-testid="email"]').type('adrianopuc@yahoo.com');
    cy.get('[data-testid="ERRADO"]').click();
    cy.get('[data-testid="senha"]').type('654321');
    cy.get('[data-testid="ERRADO"]').click();
    cy.get('#root span:nth-child(2)').contains('MENSAGEM DE ERRO DO CYPRESS - botão não existe.');
    })
}) ;

