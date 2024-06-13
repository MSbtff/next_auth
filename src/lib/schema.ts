import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, select: false},
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },

    authProviderId: {type: String}, //소셜 로그인을 위한 id 깃허브의 로그인한 사람을 우리사이트에 시켜야하는데 인증 받은 값을 우리 시스템에서 녹여서 사용해야하는데 id가 절대 안 바뀐다. 그러니 우리 DB에 넣어주는 것이다. 이름이랑 비밀번호가 없는데 그럼 어떻게 넣느냐
  },
  {timestamps: true}
);
//호환성이 어그남
export const User = mongoose.models?.User || mongoose.model('User', userSchema);
