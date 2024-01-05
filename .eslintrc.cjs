module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // vue 规则
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  // 添加 vue文件解析器  解析template文件
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    // volar 格式化html与eslint 不兼容，标签属性不换行
    // "no-multiple-empty-lines": ["warn", { "max": 1, "maxBOF": 0 ,"maxEOF": 0, }],
    // 强制执行最大数量的连续空行。
    // "maxEOF"在文件末尾强制执行最大数量的连续空行。"maxBOF"在文件开头强制执行最大数量的连续空行。
    'no-multiple-empty-lines': 'warn', // 强制执行最大数量的连续空行。"maxEOF"在文件末尾强制执行最大数量的连续空行。"maxBOF"在文件开头强制执行最大数量的连续空行。
    'vue/padding-line-between-blocks': ['error', 'always'], // template\script\style 块之间的空行 :FIXME 会和上面的no-multiple-empty-lines rule冲突
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': 'off', //  使用any类型时提示Unexpected any. Specify a different type.
    '@typescript-eslint/ban-types': 'off', // 使用类型{}时报错
    'vue/html-self-closing': 'off', // <div /> 是否自闭合标签
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': [
      // 设置单行、多行标签属性attr数量
      'warn',
      {
        singleline: { max: 8 },
        multiline: { max: 1 },
      },
    ],
    'vue/first-attribute-linebreak': [
      // attr属性第一行是否换行
      'warn',
      {
        singleline: 'beside',
        multiline: 'below',
      },
    ],
    'vue/singleline-html-element-content-newline': [
      'off',
      {
        // 单行有内容是否换行
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
      },
    ],

    'vue/new-line-between-multi-line-property': [
      'error',
      {
        // 设置选项式api时，属性之间是否需要换行
        minLineOfMultilineProperty: 2,
      },
    ],
    'vue/v-for-delimiter-style': ['error', 'of'], // for fo or in
    // "vue/script-indent": ["error", 2, { "baseIndent": 0, "switchCase": 1, }],
    // indent: ['warn', 2, { SwitchCase: 1 }],
    '@typescript-eslint/indent': ['warn', 2, { SwitchCase: 1 }],
    // 在花括号中使用一致的空格
    // 'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false }],
    // 强制圆括号内的空格
    // 'space-in-parens': ['error', 'never']
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    //在代码块中开括号前和闭括号后有空格
    'block-spacing': 'error',
    // 逗号前后使用一致的空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 大括号风格要求
    'brace-style': 'error',
    // 在计算的属性的方括号中使用一致的空格
    'computed-property-spacing': ['error', 'never'],
    // 文件末尾保留一行空行
    'eol-last': ['error', 'always'],
    // 禁止在函数标识符和其调用之间有空格
    'func-call-spacing': ['error', 'never'],
    // 对象字面量的键和值之间使用一致的空格
    'key-spacing': ['error', { afterColon: true }],
    // 关键字周围空格的一致性
    'keyword-spacing': ['error', { before: true }],
    // 行的最大长度
    // 'max-len': ["error", { "code": 80 }],
    // 要求构造函数首字母大写 (new-cap)
    'new-cap': ['error', { newIsCap: true }],
    // 禁止连续赋值 (no-multi-assign)
    'no-multi-assign': 'error',
    // 禁止混合使用不同的操作符使用括号括起来明确了开发者的意图
    'no-mixed-operators': 'error',

    // 禁止使用嵌套的三元表达式
    'no-nested-ternary': 'error',
    // 有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': 'error',
    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',
    // 单个语句的位置
    'nonblock-statement-body-position': ['error', 'beside'],
    // 在花括号内使用一致的换行符
    // 'object-curly-newline': ['error', { multiline: true }],
    // 使用一致的反勾号、双引号或单引号 (quotes)
    quotes: ['error', 'single'],
    // 要求或禁止使用分号代替 ASI
    semi: ['error', 'never'],
    // 强制分号前后有空格
    'semi-spacing': ['error', { before: false, after: true }],
    // 要求或禁止语句块之前的空格
    'space-before-blocks': 'error',
    // 要求中缀操作符周围有空格
    'space-infix-ops': 'error',
    // 禁止在一元操作符之前或之后存在空格
    'space-unary-ops': 'error',
    // 要求箭头函数的箭头之前或之后有空格
    'arrow-spacing': ['error', { before: true, after: true }],
    // 比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': 'error',
    // 禁止重复导入imports
    'no-duplicate-imports': 'error',
    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 'error',
    // 剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': ['error', 'never'],
    // 强制模板字符串中空格的使用
    'template-curly-spacing': ['error', 'always'],
    // "overrides": [
    //   {
    //     "files": ["*.vue"],
    //     "rules": {
    //       "indent": "off"
    //     }
    //   }
    // ]
    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    // 'vue/v-on-event-hyphenation': ['warn', 'never'],
    'vue/no-unused-vars': 'warn',
  },
}
