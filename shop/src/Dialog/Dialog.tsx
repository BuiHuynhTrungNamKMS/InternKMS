import { useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { dialogActions } from '../../store/dialogSlice';

const Dialog: React.FC = () => {
  const message = useSelector((state: RootState) => state.dialogSlice.message);
  const isShow = useSelector((state: RootState) => state.dialogSlice.isShow);
  const dispatch = useDispatch();
  
  return (
    <>
      {isShow && (
        <div className="bg-zinc-1000 opacity-80 fixed inset-0 z-50   ">
          <div className="flex h-screen justify-center items-center ">
            <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-sky-500 rounded-xl ">
              <div className="flex  text-lg  text-zinc-600   mb-10">
                {message}
              </div>
              <div className="flex">
                <button
                  className=" rounded px-8 py-2 text-white bg-green-400 "
                  onClick={() => dispatch(dialogActions.changeShow(false))}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Dialog;
