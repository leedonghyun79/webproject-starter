---
name: debug
description: 원인이 불명확한 버그나 에러를 체계적으로 파악하고 해결하기
---

## 버그 원인 분석 (체계적)

**자동 호출:** 원인을 모를 때, 구글링으로 안 될 때

### Step 1: 현상 정확히 기술
```
- 어디서 발생? (NestJS 로그인 엔드포인트 vs. 클라이언트 폼 제출)
- 언제? (특정 입력일 때? 항상? 가끔?)
- 에러 메시지? (전체 스택 트레이스)
```

### Step 2: 범위 좁히기
```
[ ] DB 연결 확인
[ ] API 엔드포인트 동작 확인 (curl/Postman)
[ ] 클라이언트에서 올바른 데이터 보냈는지 확인
[ ] 미들웨어 (CORS, Auth, Validation) 확인
```

### Step 3: 가설 세우고 검증
```
가설: JWT 토큰이 쿠키에 저장되지 않았음
검증 방법: DevTools Network/Application 탭 확인
```

### Step 4: 원인 확인 후 수정
```
✅ 원인: res.cookie() 호출 빠짐
✅ 수정: auth.controller.ts에 .cookie('token', ...) 추가
```

---

**그다음:** 수정 후 빌드·테스트 실행 → 자동으로 `/learn` 실행
