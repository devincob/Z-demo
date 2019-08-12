/**
 * 数组转树形结构
 * @param {Array} $list
 * @param {String} $pk
 * @param {String} $pid
 * @param {String} $child
 * @param {Number|String} $root
 * @returns {Array}
 */
export default function listToTree($list, $pk = 'id', $pid = 'pid', $child = 'children', $root = 0) {
  let $tree = []
  let $refer = []
  for (let $data of $list) {
    $refer[$data[$pk]] = $data
    let $parentId = $data[$pid]
    if ($root === $parentId) {
      $tree.push($data)
    } else {
      if ($refer[$parentId]) {
        let $parent = $refer[$parentId]
        if (!$parent[$child])$parent[$child] = []
        $parent[$child].push($data)
      }
    }
  }
  return $tree
}
