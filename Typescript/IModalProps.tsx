export interface IModalProps {
    handleClose(): void;
    show: boolean;
    children: React.ReactNode;
}
