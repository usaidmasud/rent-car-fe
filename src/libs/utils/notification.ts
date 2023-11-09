import { message, notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification/interface';
interface IMessage {
  content: string | React.ReactNode;
  className?: string;
  type?: 'success' | 'error' | 'info' | 'warning' | 'warn' | 'loading';
  duration?: number;
}

const style = {
  marginTop: '20vh',
};
export const customMessage = ({
  content,
  type,
  className,
  duration,
}: IMessage) => {
  switch (type) {
    case 'success':
      message.success({
        content: content ?? 'message',
        className: className,
        duration: duration ?? 2,
        style: {
          ...style,
        },
      });
      break;
    case 'error':
      message.error({
        content: content ?? 'message',
        className: className,
        duration: duration ?? 2,
        style: {
          ...style,
        },
      });
      break;
    case 'info':
      message.info({
        content: content ?? 'message',
        className: className,
        duration: duration ?? 2,
        style: {
          ...style,
        },
      });
      break;

    case 'warning':
      message.warning({
        content: content ?? 'message',
        className: className,
        duration: duration ?? 2,
        style: {
          ...style,
        },
      });
      break;
    case 'warn':
      message.warning({
        content: content ?? 'message',
        className: className,
        duration: duration ?? 2,
        style: {
          ...style,
        },
      });
      break;
    case 'loading':
      message.loading({
        content: content ?? 'message',
        className: className,
        duration: duration ?? 2,
        style: {
          ...style,
        },
      });
      break;
    default:
      message.info({
        content: content ?? 'message',
        className: className,
        duration: duration ?? 2,
        style: {
          ...style,
        },
      });
      break;
  }
};

interface INotification {
  type: 'success' | 'info' | 'warning' | 'error';
  message?: string | undefined | React.ReactNode;
  description?: string | undefined | React.ReactNode;
  placement?: NotificationPlacement;
}

// custom notification antd

export const openNotificationWithIcon = (props: INotification) => {
  notification[props.type]({
    message: props.message ?? 'Notification',
    description: props.description,
    duration: 5,
    placement: props.placement ?? 'bottomRight',
    // style: {
    //   marginTop: "10vh",
    // },
  });
};
