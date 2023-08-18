module.exports = {
  "branches": [
    "main"
  ],
  "plugins": [
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "conventionalcommits",
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        "preset": "conventionalcommits"
      }
    ],
    // 获取 commit 信息生成 CHANGELOG 文件
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ],
    // 修改 package.json 中的版本号
    [
      "@semantic-release/npm",
      {
        npmPublish: false
      }
    ],
    // 提交和推送修改后的package.json, CHANGELOG.md
    [
      "@semantic-release/git",
      {
        "assets": [
          "package.json",
          "CHANGELOG.md"
        ],
      }
    ],
    // 发布一个 GitHub 发布版本，并在已发布的 Pull Requests/Issues 上进行评论。
    "@semantic-release/github"
  ]
}
