// enrich: 본질은 같고 부가 정보만 덧붙이는 반환 함수라는뜻
function enrichReading(original){
    const result = _.cloneDeep(original)
    result.baseCharge = calculateBaseCharge(result)
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year))
    return result
}

function calculateBaseCharge(){}

const rawReading = acquireReading()
const aReading = enrichReading(rawReading)
const taxableCharge = aReading.taxableCharge