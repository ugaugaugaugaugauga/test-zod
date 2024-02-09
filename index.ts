import * as z from 'zod'

const passwordSchema = z.string().min(4).max(16)

const password = '123'

const onClick = (pw: z.infer<typeof passwordSchema>) => {
  const parsedPassword = passwordSchema.safeParse(pw)
  if (!parsedPassword.success) return { error: '올바르지 않은 패스워드' }

  const password = parsedPassword.data
  // 통과 로직 처리
  return { success: '통과', data: password }
}

console.log(onClick(password))
