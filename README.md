# movie-share-app
## 概略
フルスタック開発の練習として映画の感想をシャアするコミュニティアプリを作成しました。
## 言語
### backend
django
django-rest-framework
django-rest-framework-simplejwt
djoser
### frontend
angular.js
typescript

## 機能
### 1. 投稿のCRUD操作
投稿の作成、取得、更新、削除が可能です。
またそれぞれに対してPermissionを設定しました。
1. 投稿の閲覧に関してはログインが必要
2. 投稿の編集（更新、削除）に関しては管理者権限を持っているか、その投稿の作成者であることが必要
### 2. JWT認証による会員機能
認証に関してはJWT認証を採用しました。
## UI
![home](https://user-images.githubusercontent.com/112918420/224056644-787e03ff-721d-4369-aa48-0c9fb618da9b.png)
