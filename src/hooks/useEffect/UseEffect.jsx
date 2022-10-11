import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProvincesList, setDistrictsList, demoHooksAction } from '../../store/actions/demoHooksAction'

const UseEffect = () => {
    const [number, setNumber] = useState(1)
    const [like, setLike] = useState(1)
    const [provinceId, setProvinceId] = useState()
    const [filterDistrictList, setFilterDistrictList] = useState()

    //don't need to use mapDispatchToProps anymore
    //useDispatch is used to dispatch actions into redux store
    const dispatch = useDispatch()

    //get data from redux store
    //it's similar to mapStateToProps
    const { provincesList, districtsList } = useSelector((state) => state.demoHooks)
    // console.log('hookState', hookState)

    //có thể nhận 2 tham số.
    //luôn luôn chạy ít nhất một lần sau khi component được render
    /**
     * tham số 1: callback
     * tham số 2: có thể có hoặc không, có là array[]
     */

    //TH1: [chỉ có 1 callback] thay thế cho component didMount và didUpdate => được chạy lại mỗi khi component rerender [rất ít sử dụng]
    // useEffect(() => {
    //     console.log('useEffect-TH1')
    // })

    //TH2: [có 1 callback, 1 array rỗng] thay thế cho component didMount => chạy duy nhất 1 lần sau khi component render
    // useEffect(() => {
    //     console.log('useEffect-TH2')
    // }, [])

    //TH3: [có 1 callback, 1 array có giá trị] thay thế cho component didUpdate => chạy lại nếu như giá trị trong array bị thay đổi (dependencies)
    // useEffect(() => {
    //     console.log('useEffect-TH3')
    // }, [number, like])

    //TH4: [có 1 callback trong đó có return, có 1 mảng rỗng] thay thế cho willUnmount => chạy trước khi component bị hủy khỏi giao diện
    // useEffect(() => {
    //     return () => {
    //         console.log('useEffect-TH4')
    //     }
    // }, [])



    // console.log('Render')

    //Use the second type
    useEffect(() => {
        // getProvinces()

        //IIFE: cách 2
        // (async () => {
        //     const result = await axios.get('https://6335707aea0de5318a137e3c.mockapi.io/provines?fbclid=IwAR1asfNobmysRmFV4pUF9XiCGST2BOdcOJSCV0RM6dOyd12NUXMPodhLL_o')
        //     console.log(result)
        // })()
        // getDistricts()


        dispatch(demoHooksAction.setProvincesList())
        dispatch(demoHooksAction.setDistrictsList())

    }, [])

    useEffect(() => {
        // console.log(provinceId)
        if (provinceId) {
            const list = districtsList.filter(item => item.provinceId === provinceId)
            setFilterDistrictList(list)
        }

    }, [provinceId])

    // const getProvinces = async () => {
    //     const result = await axios.get('https://6335707aea0de5318a137e3c.mockapi.io/provines?fbclid=IwAR1asfNobmysRmFV4pUF9XiCGST2BOdcOJSCV0RM6dOyd12NUXMPodhLL_o')

    //     dispatch(setProvincesList(result.data))

    //     // console.log(result)
    // }
    // const getDistricts = async () => {
    //     const result = await axios.get('https://6335707aea0de5318a137e3c.mockapi.io/districts?fbclid=IwAR2AtSX6abrpfzjl_g7G3Ps21LWgjEZo-_N7fWODP7b6taIpCM_cuWB6b_A')

    //     dispatch(setDistrictsList(result.data))
    // }

    // console.log(filterDistrictList)

    return (
        <div>
            UseEffect
            <div>
                <p>Number: {number}</p>
                <button
                    className='btn btn-success'
                    onClick={() => {
                        setNumber(number + 1)
                    }}
                >Increase</button>
            </div>
            <div>
                <p>Like: {like}</p>
                <button
                    className='btn btn-success'
                    onClick={() => {
                        setLike(like + 1)
                    }}
                >Increase</button>
            </div>
            <div className='mt-3'>
                <h2>BT USE EFFECT</h2>
                <div className='alert alert-info'>
                    <p>chọn thành phố nào thì tự động chuyển qua quận huyện tương ứng với thành phố đó</p>
                </div>
                <div className='row'>
                    <div className='col-6 form-group'>
                        <select
                            className='form-control'
                            //lấy ra giá trị thay đổi: id của province
                            onChange={(event) => setProvinceId(event.target.value)}
                        >
                            <option value="none">Please choose</option>
                            {
                                provincesList.map((item) => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='col-6 form-group'>
                        <select className='form-control'>
                            {
                                //thay thì viết districtsList thì thay bằng filterDistrictsList
                                districtsList.map((item) => (
                                    //trước khi render cần xử lý thêm gì đó thì mới dùng {return ()}
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))
                            }
                            {/* cách 2: khi cần xử lý một logic phức tạp nào đó, đỡ phải kéo lên trên xem function */}
                            {/* {
                                (() => {
                                    const value = 10

                                    return hookState.districtsList.map((item) => (
                                        //trước khi render cần xử lý thêm gì đó thì mới dùng {return ()}
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))
                                })()
                            } */}
                        </select>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UseEffect