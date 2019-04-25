# CodeRiver

CodeRiver PC


## Git Flow

1. 开发者（A,B,C）都会再当前项目的组中，会有当前项目的权限
2. 开发者统一在 `dev` 分支进行开发，日常提交至Dev
3. 当某一个模块完成是，`merge` 至 `master`.

## Commit Message(尽量使用英文)

- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

`Example`

> feat : update module-login ui

> docs : add gitflow && commit message style

> fix : can't login success (module-login)


## 当前Task

1. 所有开发者统一完成登录模块（样式，交互，校验逻辑）
2. 开发周期（`1week`）
3. 一周后，大家在Github的项目中进行review（组件拆分思想，目录组织方式，命名规范）
