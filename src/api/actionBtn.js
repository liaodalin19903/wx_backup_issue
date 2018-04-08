/**
 * Created by ldl on 2018/3/13.
 */

// 修改按钮
const modify_btn = function (vm, h, params, fn, btn_text) {
  return h(
    'Button', {
      props: {
        type: 'success',
        size: 'small'
      },
      style: {
        marginRight: '5px',
        marginBottom: '5px'
      },
      on: {
        click: () => {
          fn(h, params)
        }
      }
    }, btn_text
  )
}

// 删除按钮
const remove_btn = function (vm, h, params, fn) {
  return h(
    'Poptip',
    {
      props: {
        confirm: true,
        title: '您确定要删除这条数据吗?',
        transfer: true
      },
      on: {
        'on-ok': () => {
          fn(params.row.id, params.index);
        }
      }
    },
    [
      h('Button', {
        style: {
          marginRight: '5px',
          marginBottom: '5px'
        },
        props: {
          type: 'error',
          size: 'small',
          placement: 'top'
        }
      }, '删除')
    ]
  );
}

const btn_fn = {
  other_btn: modify_btn,
  del_btn: remove_btn
}

export default btn_fn;