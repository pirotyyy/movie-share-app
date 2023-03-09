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
![login](https://user-images.githubusercontent.com/112918420/224056920-449645dc-2c2b-4fad-b6a1-ed235a8a1151.png)
![register](https://user-images.githubusercontent.com/112918420/224057001-f04dab20-6187-4f9e-95cb-cea16177b5de.png)
![postlist](https://user-images.githubusercontent.com/112918420/224057109-8f2e810b-96e0-43cb-9014-8805a58108b5.png)
![create](https://user-images.githubusercontent.com/112918420/224057197-9bbdffdc-e107-40e4-b913-fe989a65be50.png)
![edit](https://user-images.githubusercontent.com/112918420/224057251-849c04c0-1487-48d9-91ef-626e327eab25.png)
