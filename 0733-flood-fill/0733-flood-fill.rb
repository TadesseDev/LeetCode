# @param {Integer[][]} image
# @param {Integer} sr
# @param {Integer} sc
# @param {Integer} color
# @return {Integer[][]}
def flood_fill(image, sr, sc, color)
    input=[*image]
    @original=image[sr][sc]
    def rep(im, sr, sc)
        im[sr][sc]=nil
        res=[]
        res.push([sr-1, sc]) if sr>=1 && im[sr-1][sc]!=nil&&im[sr-1][sc]==@original
        res.push([sr+1, sc]) if sr+1<im.length && im[sr+1][sc]!=nil&&im[sr+1][sc]==@original
        res.push([sr, sc-1]) if sc>=1 && im[sr][sc-1]!=nil && im[sr][sc-1]==@original
        res.push([sr, sc+1]) if sc+1<im[sr].length && im[sr][sc+1]!=nil && im[sr][sc+1]==@original
        res.each do |ele|
            im=rep(im, ele[0], ele[1])
        end
        return im
    end
    rep(input, sr, sc).map {|ele| ele.map {|val| val||=color}}
end