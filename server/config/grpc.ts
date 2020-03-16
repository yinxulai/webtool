import grpc from 'grpc'

export const account = {
    address:"account.grpc.yinxulai.com:88",
    credentials:  grpc.credentials.createInsecure()
}

export const swaper = {
    address:"swaper.grpc.yinxulai.com:88",
    credentials:  grpc.credentials.createInsecure()
}

export const sender = {
    address:"sender.grpc.yinxulai.com:88",
    credentials:  grpc.credentials.createInsecure()
}
