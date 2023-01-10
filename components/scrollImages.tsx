import { Box, Flex } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Props = {
  images: React.ReactNode[]
}

const Component: React.FC<Props> = ({ images }) => {
  const ref = useRef<HTMLDivElement>(null)

  // 1つの画像の横の長さ
  const itemWidth = 520
  // 画像間の感覚
  const gap = 24
  // 画像の横幅と、画像間の合計値
  const itemWidthWithGap = itemWidth + gap
  // 画像の数
  const numberOfContents = images.length
  // 横に流れる画像のシーケンス合計
  const [imageBlocks, setImageBlocks] = useState(images)

  useEffect(() => {
    // 「横幅の穴埋め」
    // windowの長さよりコンテンツ数が少ない場合
    // 横幅 < 画像の合計の長さ となるように、画像群(シーケンス)をループさせて配列に加える
    if (
      ref.current?.offsetWidth &&
      imageBlocks.length * itemWidthWithGap < ref.current.offsetWidth
    ) {
      // 全体の長さから何個分　足りていないのか
      const fillableNumberOfContents: number = Math.floor(
        (ref.current.offsetWidth - imageBlocks.length * itemWidthWithGap) /
          numberOfContents
      )

      // シーケンスを追加するのは何個か
      const fillableNumberOfSequence: number = Math.ceil(
        fillableNumberOfContents / numberOfContents
      )

      // シーケンス分　コンテンツを追加
      const newimageBlocks = [...imageBlocks]
      const _ = [...Array(fillableNumberOfSequence)].map((_, index) => {
        newimageBlocks.push(...imageBlocks)
      })

      setImageBlocks(newimageBlocks)
    }
  }, [ref.current]) //DOMがレンダリングされ、横幅が確定した瞬間に実行される

  return (
    <>
      <Box
        alignItems="center"
        w="full"
        position="relative"
        mx={'auto'}
        overflow="hidden"
        ref={ref}
      >
        <AnimatePresence onExitComplete={() => console.log('aaa')}>
          <motion.div
            // アニメーションの変化終了時点の最終移動差分
            animate={{
              x: itemWidthWithGap,
            }}
            // 初期状態〜Animationまでをどう変化させるかを記述
            transition={{
              repeat: Infinity, //ループさせる
              duration: 10, //　animationを終えるまでの時間(秒)
              ease: 'linear', // 変化方法。直線的に変化させている。
            }}
            onUpdate={(latest) => {
              if (latest.x >= itemWidthWithGap) {
                //１マス分動いたら発動する処理
                const newimageBlocks = [...imageBlocks]
                newimageBlocks.unshift(imageBlocks[imageBlocks.length - 1]) //冒頭に末尾の画像を追加
                newimageBlocks.pop() //末端の画像を消去する
                setImageBlocks(newimageBlocks) //変更した配列を適応
              }
            }}
          >
            <Flex
              gap={6}
              w={`${itemWidthWithGap * imageBlocks.length}px`}
              ml={`-${itemWidth}px`}
            >
              {imageBlocks.map((block, index) => {
                return (
                  <Box
                    key={index}
                    w={`${itemWidth}px`}
                    h={`${itemWidth}px`}
                    position="relative"
                  >
                    {block}
                  </Box>
                )
              })}
            </Flex>
          </motion.div>
        </AnimatePresence>
      </Box>
    </>
  )
}

export { Component as ScrollImages }