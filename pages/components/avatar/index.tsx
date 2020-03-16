import React from 'react'
import style from './style.less'
import { Container } from 'react-pitaya'

export type Size = 'large' | 'small' | 'normal'

interface IProps {
    src: string,
    alt?: string,
    size?: Size,
    onUpload?: (file: File) => void,
}

// TODO: 上传头像
export const Avatar = (props: IProps) => {
    const { src, alt, size = 'normal', onUpload } = props

    const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.currentTarget
        const files = target.files
        onUpload && onUpload(files[0])
        target.value = null
        // 清空 value 确保每次选中都会触发 onChange
    }

    return (
        <Container className={[style.avatar, style[size]]} >
            <input className={style.hide} type="file" onChange={handleSelectFile} />
            {onUpload && <span>点击<br />修改</span>}
            <img alt={alt} src={src} />
        </Container>
    )
}

export default Avatar