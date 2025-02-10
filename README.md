# 墨七的脚本库

一些方便的，可直接使用的通用小脚本。

## 使用方式：

> 如果是 `.ts` 脚本，需要安装 bun
>
> 安装地址 https://bun.sh/

使用方式：

```bash
bun run ./shell_ts/<脚本名>.ts
```

> 如果是 `.go` 脚本，需要安装 go
>
> 安装地址 https://go.dev/dl/

```bash
go run ./shell_go/<脚本名>.go
```

## 脚本及说明列表

```bash
# 安装和升级go的脚本
bun run shell_ts/update_go.ts

# 启动一个静态服务
go run shell_go/static_serve.go

```
