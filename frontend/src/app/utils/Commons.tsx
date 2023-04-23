import { notifications } from '@mantine/notifications';

export const showMessage = (status : string) => {
    if(status === 'success'){
        notifications.show({
            title: 'Success Notification',
            message: 'Ticket Added Succesfully !',
            autoClose: 2000,
            color:'green'
          })
    }else{
        notifications.show({
            title: 'Error Notification',
            message: 'Something went wrong !',
            autoClose: 2000,
            color:'red'
          })
    }

}