const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

// 用户登录
exports.login = async (req, res, next) => {
  try {
    // 1. 数据验证
    // 2. 生成 token
    const user = req.user.toJSON()
    const token = await jwt.sign({
      userId: user._id
    }, jwtSecret, {
      // 过期时间
      expiresIn: 60 * 60 * 24
    })

    // 3. 发送成功响应（包含 token 的用户信息）
    delete user.password
    res.status(200).json({
      ...user,
      token
    })
  } catch (err) {
    next(err)
  }
}

// 用户注册
exports.register = async (req, res, next) => {
  try {
    let user = new User(req.body.user)
    // 2.数据验证
    // 2.1 基本数据验证
    // 2.2 业务数据验证

    // 3. 验证通过，将数据保存到数据库
    // 不过mongose的验证只有触发数据库交互时才会触发，有些时候就不好用
    await user.save()

    user = user.toJSON()
    
    // 保存后不让返回中有user.password
    delete user.password

    res.status(201).json({
      user
    })
  } catch (err) {
    next(err)
  }
}

// 获取当前登录用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    res.status(200).json({
      user: req.user
    })
  } catch (err) {
    next(err)
  }
}

// 更新当前登录用户
exports.updateCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('updateCurrentUser')
  } catch (err) {
    next(err)
  }
}

// 获取指定用户资料
exports.getUserProfile = async (req, res, next) => {
  try {
    // 处理请求
    res.send('getUserProfile')
  } catch (err) {
    next(err)
  }
}

// 关注用户
exports.followUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('followUser')
  } catch (err) {
    next(err)
  }
}

// 取消关注用户
exports.unfollowUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('unfollowUser')
  } catch (err) {
    next(err)
  }
}
