/* eslint quotes: false*/
module.exports = {
  extends: ['eslint-config-alloy/typescript-react', 'eslint-config-umi'],
  settings: {
    //用于支持webpack定义的别名 (需要安装 eslint-plugin-import 和 eslint-import-resolver-webpack 插件)
    'import/resolver': 'webpack',
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      flowVersion: '0.53', // Flow version
    },
  },
  env: {
    browser: true,
    node: false,
    es6: true,
    mocha: false,
    commonjs: false,
    amd: false,
  },
  plugins: [
    'typescript',
    'react', // 插件地址 https://github.com/yannickcr/eslint-plugin-react
    'import', // 插件地址 https://github.com/benmosher/eslint-plugin-import
  ],
  overrides: {
    files: ['*.ts", "*.tsx'],
    parser: 'typescript-eslint-parser',
    parserOptions: {
      // 基于 eslint@2.x
      // sourceType: 'module',
      ecmaVersion: 6,
      ecmaFeatures: {
        jsx: true, // 迁移说明: http://eslint.org/docs/user-guide/migrating-to-2.0.0
      }
    }
  },

  globals: {
    __webpack_public_path__: true,
    process: true,
    __dirname: true,
    CFG: true, // VM配置全局变量
    _: true, // lodash 全局变量
    React: true,
    ReactDom: true,
    KISSY: false,
    TB: false,
    JSTracker: false,
    JSTracker2: false,
    $: false, // Kimi 全局变量
    goldlog: true, // 黄金令箭
    WindVane: false, // 手淘环境
    require: true, // 手淘环境
  },
  rules: {
    // ES6 规则
    // http://gitlab.alibaba-inc.com/specs/style-guide/issues/50#96
    'no-redeclare': 0,
    'prefer-const': 0,
    'no-const-assign': 2,
    'no-undefined': 0,
    'no-class-assign': 2,
    'no-param-reassign': 0,
    'no-dupe-class-members': 2,
    'rest-spread-spacing': 2,
    'no-duplicate-imports': 2,
    'no-useless-rename': 2,
    'arrow-spacing': 2,
    'no-useless-computed-key': 2,
    'template-curly-spacing': 2,
    'object-curly-spacing': 0,
    'generator-star-spacing': [1, { before: false, after: true }],
    'yield-star-spacing': [1, { before: false, after: true }],
    /**
     * 最佳实践
     */
    strict: [0, 'global'],
    'global-strict': [0, 'always'], // deprecated rule, 忽略，采用上面规则限制
    'no-extra-strict': 0,
    'no-shadow': 1, // 局部变量和外层变量重名

    // 使用该项配置会导致esLint挂掉?  babel-eslint升级之8.0.0版本
    // "no-unused-vars": "error",
    'no-unused-vars': [
      0, // 局部变量未使用
      {
        vars: 'all',
        args: 'after-used',
      },
    ],

    'no-undef': 0, // 未定义的变量
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, // 函数参数不能重复
    'no-unused-expressions': 0, // 未使用的表达式
    'no-use-before-define': 0, // 允许定义前使用
    yoda: 0,
    eqeqeq: 0,
    'no-new': 0, // 允许 new 创建的对象没有被引用
    'consistent-return': 0, // 允许没有 return
    'dot-notation': [
      2,
      {
        // 操作对象属性时，优先使用 . 操作
        allowKeywords: true,
      },
    ],
    'no-extend-native': 2, // 禁止通过 prototype 给原生对象增加额外方法。
    'no-native-reassign': 2, // 阻止复写内置类型
    'no-return-assign': 2, // 是否允许 return 返回表达式
    'no-return-await': 0, // 是否允许 await 返回表达式
    'no-constant-condition': [
      2,
      {
        checkLoops: false,
      },
    ], // 提示拒绝使用已经明确意义的判断条件 if (true)
    'max-len': [
      1,
      200,
      2,
      {
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],

    'no-caller': 2,
    'no-loop-func': 1,

    // nodejs 环境规则
    //"no-console": "warn", // 代码禁止出现 console
    'no-catch-shadow': 2, // try catch 捕获的变量名禁止重名定义
    'no-new-require': 0, // require 前面是否能添加 new
    'no-mixed-requires': [0, false], // 是否合并 var requires
    'no-path-concat': 0, // 是否可以自行拼接 path 还是必须要引用 path 模块
    'handle-callback-err': 0, // 代码里面是否有处理 err 的逻辑？

    /**
     * 代码风格
     */
    'no-empty': 0, // 允许空 block 语句
    indent: [
      2,
      2,
      {
        // 缩进
        SwitchCase: 1,
      },
    ],
    camelcase: [
      1,
      {
        // 驼峰，同时检查属性名
        properties: 'always',
      },
    ],
    quotes: [2, 'single', 'avoid-escape'], // 引号，强制使用单引号
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    'comma-spacing': [
      2,
      {
        // 逗号空格
        before: false,
        after: true,
      },
    ],
    'comma-style': [2, 'last'], // 逗号风格
    'eol-last': 0, // 最后留一行空行
    'func-names': 0, // 是否所有函数必须命名
    'new-cap': [
      1,
      {
        // 类名首字母大写
        newIsCap: true,
      },
    ],
    'key-spacing': [
      2,
      {
        // object 的 key value ：的前后空格
        beforeColon: false,
        afterColon: true,
      },
    ],
    'no-multi-spaces': 2, // 表达式中是否允许多个空格
    'no-multiple-empty-lines': 0, // 是否允许多行空格
    'no-nested-ternary': 0, // 是否禁止三目运算
    'no-new-object': 2, // 禁止 new Object()
    'no-spaced-func': 2, // 函数与括号的空格
    'no-trailing-spaces': 0, // 是否允许末尾有空格
    'no-extra-parens': [1, 'functions'], // "no-wrap-func": 1, 禁止额外的括号 允许括号内是方法
    'no-underscore-dangle': 0, // 允许任意使用下划线
    'one-var': [1, 'consecutive'], // 定义变量一行一个
    'padded-blocks': [0, 'never'], // 块代码上下不能留空行
    semi: 0, // 校验分号
    'semi-spacing': 2, // 分号后面留空
    'keyword-spacing': 2, // 关键词后面加空格
    'space-before-blocks': 2, // 块级代码加空格
    'space-infix-ops': 0, // 操作符之间的空格
    'spaced-comment': [
      1,
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ], // 注释斜线后面是否需要空格

    /**
     * ts 规范
     */

    // 'typescript/no-constant-condition': 2,
    'typescript/quotemark': [true, 'single', 'avoid-escape', 'jsx-double'],
    'typescript/no-console': 0,
    'typescript/ordered-imports': 0,
    'typescript/no-namespace': 0,
    'typescript/object-literal-sort-keys': 0,
    'typescript/arrow-parens': 0,
    'typescript/no-empty': 0,
    'typescript/no-var-requires': 0,
    'typescript/array-type': 0,
    // 'typescript/member-ordering': [true,{
    //   "order":[
    //     "private-static-field",
    //     "protected-static-field",
    //     "public-static-field",
    //     "private-instence-field",
    //     "protected-instence-field",
    //     "public-instence-field",
    //     "private-constructor",
    //     "protected-constructor",
    //     "public-constructor",
    //     "private-static-method",
    //     "protected-static-method",
    //     "public-static-method",
    //     "private-instence-method",
    //     "protected-instence-method",
    //     "public-instence-method"
    //   ]
    // }],
    'typescript/object-literal-key-quotes': [true, 'as-needed'],
    'typescript/no-trailing-whitespace': [false, 'ignore-comments'],
    'typescript/class-name-casing': 2,

    /**
     * React JSX 规范
     */
    'react/display-name': 0, // 是否显示 Component 名称
    'react/jsx-boolean-value': [0, 'always'], // 传递布尔值时是否明确支持
    'jsx-quotes': [2, 'prefer-double'], // jsx 属性值用双引号
    'react/jsx-no-undef': 2, // 判断 jsx 是否已经定义
    'react/jsx-sort-props': 0, // 是否排序 props
    'react/jsx-sort-prop-types': 0, // 是否排序 prop types
    'react/jsx-uses-react': 2, // 组件中中是否用了 react
    'react/jsx-uses-vars': 2, // 定义了 jsx component 没有使用
    'react/jsx-pascal-case': 1, // 使用jsx作为组件扩展名，采用pascal命名法  引用名采用驼峰命名
    'react/jsx-closing-bracket-location': 1, // 组件prop的的对齐风格
    'react/no-did-mount-set-state': 0, // 不要在 componentDidMount 里面设置 state
    'react/no-did-update-set-state': 0, // 同上
    'react/no-multi-comp': 0, // 一个文件里面禁止声明多个 component
    'react/no-unknown-property': 2, // 检查 class、for 属性是否转义
    'react/prop-types': 0, // 不强制设置 proptypes
    'react/react-in-jsx-scope': 1, // 查看 jsx 是否引入 react
    'react/self-closing-comp': 2, // 检查是否有没有 children 的非子闭合标签
    'react/jsx-wrap-multilines': 1, // 不强制 return 的时候，结构的格式
    'react/prefer-es6-class': 1, // 使用组件类继承React.Component
    'react/sort-comp': [
      0,
      {
        // 不强制 createClass 属性的排序
        order: [
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'react/jsx-indent-props': 0,

    'no-var': 0,
  },
};
