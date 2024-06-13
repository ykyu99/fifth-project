회원가입 post
http://ykyu99.store:3306/api/auth/sign-up

json{
	"email":"ykyu88@naver.com",
	"password":"aaaa1234",
	"passwordConfirm":"aaaa1234",
	"name":"김영규"
}


로그인 post
http://ykyu99.store:3306/api/auth/sign-in

json{
	"email":"ykyu89@naver.com",
	"password":"aaaa1234"
}

이력서 조회 get
http://ykyu99.store:3306/api/resumes

이력서 상세조회 get
http://ykyu99.store:3306/api/resumes/:id

이력서 생성 post
http://ykyu99.store:3306/api/resumes

json{
	"title":"지원하는부분",
	"content":"할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분"
}

이력서 수정 patch
http://ykyu99.store:3306/api/resumes/:id

json{
	"title":"지원하는부분",
	"content":"할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분"
}

이력서 삭제 delete
http://ykyu99.store:3306/api/resumes/:id

유저 정보조회 get
http://ykyu99.store:3306/api/info

유저 정보변경 patch
http://ykyu99.store:3306/api/info

json{
	"password":"adad123123",
	"passwordConfirm":"adad123123"
}

유저 삭제 delete
http://ykyu99.store:3306/api/info


먼저 로그인 한 후 
Authorization 토큰을 헤더에 입력한 뒤 진행
