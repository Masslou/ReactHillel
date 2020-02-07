import React from 'react';
import PropTypes from 'prop-types';

export default function StickerItem({sticker}) {
    return (
        <div>
            <div>
                <div>
                    <span>o</span>
                    <input
                        type="text"
                        name="title"
                    />
                    <span>x</span>
                </div>
                <div>
                    <textarea
                        name="description"/>
                </div>

            </div>
        </div>
    );
}

StickerItem.propTypes = {

};
