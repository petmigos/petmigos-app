# Casos de uso

São classes que utilizam um [serviço](../services/README.md) para realizar **um único caso de uso ESPECÍFICO**. No caso de fazer login de usuário, por exemplo, **criamos uma classe Login** para realizar este caso de uso apenas e que recebe como parâmetro o serviço de usuários. Ex:

```ts
class Login {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  // Função sempre com nome "execute"
  execute(username: string, password: string): UserAuthenticated {
    // regras de negócio (Ex: senha não pode ser vazia, senha deve ter x dígitos, ...)
    return this.userService.login(username, password);
  }
}
```

| É nos casos de uso que iremos realizar a validação e inclusão das **regras de negócios do frontend**.
