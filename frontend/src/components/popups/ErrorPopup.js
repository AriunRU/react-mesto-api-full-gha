function ErrorPopup({ error, onClose }) {
  return (
    <div className={`popup popup_error ${error.isOpen ? 'popup_opened' : ''}`} onClick={onClose}>
      <div className="popup__container popup__container-error">
        <button className="popup__close-button popup__close-button-error" type="button" aria-label="Закрыть" onClick={onClose} />
        <h2 className="popup__title popup__title-error">Скорее исправляй!</h2>
        <span className="popup__error-text">{`${error.errorMessage}`}</span>
      </div>
    </div>
  )
}

export default ErrorPopup